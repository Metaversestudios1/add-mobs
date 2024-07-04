import connectDb from "@/connection/mongoose"
import UserDetails from "@/models/UserDetails"
import { NextResponse } from "next/server"

export const POST = async (req, {params})=>{
    await connectDb()
    try {
        const email = params.email

        const details = await UserDetails.findOne({email})
        return NextResponse.json({success: true, details: details.account_details})
    }catch (err){
      return NextResponse.json({success: false})
 }}