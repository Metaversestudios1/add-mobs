import connectDb from "@/connection/mongoose"
import AdminUsers from "@/models/AdminUsers"
import { NextResponse } from "next/server"

export const GET = async() =>{
    await connectDb()
    try{
        const adminUsers = await AdminUsers.find().sort({createdAt:-1})
    
        return NextResponse.json({data: adminUsers})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}
export const POST = async(req) =>{
    await connectDb()
    try{
        const {param} = await req.json()
        const adminUsers = await AdminUsers.find({_id:param})
    
        return NextResponse.json({data: adminUsers})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}

