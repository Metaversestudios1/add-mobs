
import connectDb from "@/connection/mongoose";
import bcrypt from "bcrypt";
import SubUser from "@/models/SubUser";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";
export const POST = async(req) =>{

  const { email, password } = await req.json();

  try {
    await connectDb();

    const user = await SubUser.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User doesn't exist, You need to sign up first" });
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      return NextResponse.json({ message: 'Your password is incorrect' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.NEXTAUTH_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token });
  } catch (error) {
    console.error('Error in login handler:', error.message);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
