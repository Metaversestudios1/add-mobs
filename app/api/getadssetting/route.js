import connectDb from "@/connection/mongoose"
import Ads from "@/models/Ads"
import { NextResponse } from "next/server"

export const GET = async () =>{
    await connectDb()
    try {
        const data = await Ads.find()
        return NextResponse.json({success: true, data: data})
    }catch(err) {
        return NextResponse.json({success: false})
    }
}
        