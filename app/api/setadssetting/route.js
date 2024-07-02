import connectDb from "@/connection/mongoose"
import Ads from "@/models/Ads"
import { NextResponse } from "next/server"

export const PUT = async (req)=>{
    await connectDb()
    try {
        const adsSetting = await req.json()
        const add = await Ads.updateMany(
            {},{
              $set: adsSetting
            })
        return NextResponse.json({success: true })
    }catch(err) {
        return NextResponse.json({success: false, err: err})
    }
}