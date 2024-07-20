import connectDb from "@/connection/mongoose"
import UserDetails from "@/models/UserDetails"
import { NextResponse } from "next/server"
import SubUser from "@/models/SubUser"

export const POST = async(req)=>{  
    await connectDb()
    const {id} = await req.json()
    try {
        const user = await SubUser.find({_id:id})
        const email = user[0].email 
        const userdetail = await UserDetails.find({email});
        return NextResponse.json({success: true, data: userdetail[0].withdrawal_requests})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}