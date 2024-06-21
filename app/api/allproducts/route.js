import connectDb from "@/connection/mongoose";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export const POST = async (req) =>  {
    await connectDb()
    try {
    const {title, description, price, stock} = await req.json()
    const date = new Date()
    const time = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    let products = new Products({title, description, price, stock, createdAt: time});
    await products.save();
    return NextResponse.json({ success: "success" });
    }
    catch(err) {
        return NextResponse.json({ "err": err });

    }
}
