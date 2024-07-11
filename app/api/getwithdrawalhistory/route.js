import connectDb from "@/connection/mongoose"
import UserDetails from "@/models/UserDetails"
import { NextResponse } from "next/server"

export const POST = async(req)=>{  
    await connectDb()
    const {email} = await req.json()
    try {
        const userdetail = await UserDetails.find({email});
        return NextResponse.json({success: true, data: userdetail[0].withdrawal_history})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}