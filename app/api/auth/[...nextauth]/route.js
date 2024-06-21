import connectDb from "@/connection/mongoose";
import NextAuth from "next-auth";
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react";
import SubUser from "@/models/SubUser";
async function login(credentials) {
    await connectDb()
    const user = await SubUser.findOne({email: credentials.email})
    if(!user) {throw new Error("User doesn't exist, You need to signUp first")}
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if(!isCorrect) {throw new Error("Your password is incorrect")}
    return user;
}

export const authOptions = {
  pages: {
    signIn: "/"
  },
  session:{
    strategy: "jwt"
  },
  debug: true, 
  secret: process.env.NextAuth_SECRET,  
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
            const user = await login(credentials);
            return user;
        } catch (err) {
            throw new Error("Failed to login.")
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
    async session({token , session}){
      if (token) {
        await connectDb();
        const user = await SubUser.findById(token.id).lean();
        if (user) {
            session.user = {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                permission: user.permission
            };
        }
        return session;
    }
  }
}
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


