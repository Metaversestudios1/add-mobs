import connectDb from "@/connection/mongoose"
import UserDetails from "@/models/UserDetails"
import { NextResponse } from "next/server"

export const POST = async(req)=>{
    await connectDb()
    try {
    const {email} = await req.json()
    const userDetail = await UserDetails.findOne({email:email})
    console.log(userDetail)
    return NextResponse.json({success: true, data: userDetail})
    }catch(err) {
        return NextResponse.json({success: false, err: err})
    }
}

