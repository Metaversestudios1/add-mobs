

import connectDb from "@/connection/mongoose";
import Products from "@/models/Products";
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  await connectDb();
  try {
    const url = new URL(req.url);
    const param = url.searchParams.get("title");
    if (!param) {
      return NextResponse.json({ success: false, error: 'Name parameter is required' });
    }

    const del = await Products.deleteOne({ title:param });
    if (del.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
};
