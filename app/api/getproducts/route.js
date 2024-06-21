import connectDb from "@/connection/mongoose"
import Products from "@/models/Products"
import { NextResponse } from "next/server"

export const GET = async(req)=>{  
    await connectDb()
    try {
        const products = await Products.find();
        return NextResponse.json({"products": products})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}