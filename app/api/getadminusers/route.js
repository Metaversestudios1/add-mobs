import connectDb from "@/connection/mongoose";
import AdminUsers from "@/models/AdminUsers";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectDb();
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const page = params.get("page") || 1;
  const limit = params.get("limit") || 10;
  try {
    const adminUsers = await AdminUsers.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit) // Skip records based on page number
      .limit(limit);
    const count = await AdminUsers.find().countDocuments()
    if(!adminUsers) {

      return NextResponse.json({ success: false, message: "user not found" });
    }
    return NextResponse.json({ data: adminUsers, count: count , success: true});
  } catch (err) {
    return NextResponse.json({ err: err });
  }
};
export const POST = async (req) => {
  await connectDb();
  try {
    const { param } = await req.json();
    const adminUsers = await AdminUsers.find({ _id: param });

    return NextResponse.json({ data: adminUsers });
  } catch (err) {
    return NextResponse.json({ err: err });
  }
};
