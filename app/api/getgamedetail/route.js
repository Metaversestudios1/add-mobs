import connectDb from "@/connection/mongoose"
import Games from "@/models/Games"
import { NextResponse } from "next/server"

export const GET = async (req)=>{
    await connectDb()
    try {
        const {search} = new URL(req.url)
        const email = search.split("?")[1]
        console.log(email)
        const gameDetail = await Games.findOne({email: email});
        return NextResponse.json({success:true, data: gameDetail})
    }catch(err) {
        return NextResponse.json({success:false, err: err})
    }
}