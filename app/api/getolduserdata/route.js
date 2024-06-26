import connectDb from "@/connection/mongoose"
import SubUser from "@/models/SubUser"
import { NextResponse } from "next/server"

export const POST = async(req)=>{  
    await connectDb()
    const {param} = await req.json()
    console.log(param)
    try {
        const userdata = await SubUser.find({_id: param});
        return NextResponse.json({data: userdata})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}