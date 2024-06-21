import connectDb from "@/connection/mongoose";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import SubUser from "@/models/SubUser";

async function login(credentials) {
  try {
    await connectDb();
    const user = await SubUser.findOne({ email: credentials.email });
    if (!user) {
      throw new Error("User doesn't exist, You need to signUp first");
    }
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) {
      throw new Error("Your password is incorrect");
    }
    return user;
  } catch (error) {
    console.error("Error in login function:", error.message);
    throw error;
  }
}

export const authOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NextAuth_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.error("Error in authorize function:", err.message);
          throw new Error("Failed to login.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
    async session({ token, session }) {
      if (token) {
        try {
          await connectDb();
          const user = await SubUser.findById(token.id).lean();
          if (user) {
            session.user = {
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
              permission: user.permission,
            };
          }
          return session;
        } catch (error) {
          console.error("Error in session callback:", error.message);
          return session;
        }
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
