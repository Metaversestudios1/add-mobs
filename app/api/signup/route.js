import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import SubUser from "@/models/SubUser";
export const POST = async (req) =>  {
    await connectDb()
    try {
    const {name, email, password} = await req.json()
    console.log(name, email, password)
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    if(!name || !email || !password){return NextResponse.json({success:false, error:"Must provide all the fields"})}
    const user =  new SubUser({name, email, password:hashedPassword});
    await user.save();
    return NextResponse.json({ success: "success" });
    }
    catch(err) {
        return NextResponse.json({ "err": err });
    }
}
