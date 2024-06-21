import connectDb from "@/connection/mongoose";
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export const POST = async (req) =>  {
    await connectDb()
    try {
    const {name, email, contact, role, password, permission} = await req.json()
    const date = new Date()
    const time = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    const hashedPassword = await bcrypt.hash(password, 10)
    let subuser = new SubUser({name, email, password:hashedPassword, contact, permission, role, createdAt: time});
    await subuser.save();
    return NextResponse.json({ success: "success" });
    }
    catch(err) {
        return NextResponse.json({ "err": err });

    }
}
