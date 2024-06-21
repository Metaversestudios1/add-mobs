import connectDb from "@/connection/mongoose"
import Products from "@/models/Products";
import { NextResponse } from "next/server"

export const PUT = async(req)=>{
    await connectDb();
    try {
        const date = new Date()
        const time = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        const {param, title, description, stock, price} = await req.json()
        const updatedProduct = await Products.updateOne({title:param},{$set:{title, description, stock, price, createdAt: time}});
        await updatedProduct.save()
        return NextResponse.json({success: true})
    }
    catch(err){
        return NextResponse.json({"err": err})
    }
}