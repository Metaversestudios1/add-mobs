

import connectDb from "@/connection/mongoose";
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  await connectDb();
  try {
    // const url = req.url;
    // const len = url.length;
    // const param = url.substring((url.indexOf("?")+1), len);


    const url = new URL(req.url);
    const param = url.searchParams.get("name");
    console.log(param)
    if (!param) {
      return NextResponse.json({ success: false, error: 'Name parameter is required' });
    }

    const del = await SubUser.deleteOne({ name:param });
    if (del.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
};
