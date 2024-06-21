import connectDb from "@/connection/mongoose"
import SubUser from "@/models/SubUser"
import { NextResponse } from "next/server"

export const GET = async()=>{  
    await connectDb()
    try {
        const userdata = await SubUser.find();
        return NextResponse.json({data: userdata})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}