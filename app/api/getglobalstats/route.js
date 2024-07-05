import connectDb from "@/connection/mongoose"
import GlobalGameStats from "@/models/GlobalGameStats"
import SubUser from "@/models/SubUser"
import { NextResponse } from "next/server"

export const GET = async()=>{  
    await connectDb()
    try {
        const userdata = await GlobalGameStats.find();
        return NextResponse.json({success: true, data: userdata})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}