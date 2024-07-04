// import connectDb from "@/connection/mongoose"
// import SubUser from "@/models/SubUser"
// import { NextResponse } from "next/server"

// export const GET = async()=>{
//     await connectDb()
//     try {
//         const userdata = await SubUser.find();
//         return NextResponse.json({data: userdata})
//     }
//     catch(err){
//         return NextResponse.json({"err": err})
//     }
// }

import connectDb from "@/connection/mongoose";
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDb();

  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const page = params.get("page") || 1;
  const limit = params.get("limit") || 10;

  try {
    const userdata = await SubUser.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit) // Skip records based on page number
      .limit(limit); // Limit the number of records per page
    const count = await SubUser.find().countDocuments()
    if(!userdata){
      return NextResponse.json({success: false, message: "user not found"})
    }
    return NextResponse.json({ data: userdata, count:count });
  } catch (err) {
    return NextResponse.json({ err: err });
  }
};
