import connectDb from "@/connection/mongoose"
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server"

export const PUT = async(req)=>{
    await connectDb();
    try {
        const date = new Date()
        const time = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        const {param, name, email, contact, role} = await req.json()
        const updatedUser = await SubUser.updateOne({name:param},{$set:{name, email, contact, role, createdAt: time}});
        return NextResponse.json({success: true})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}