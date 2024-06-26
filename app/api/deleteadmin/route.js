

import connectDb from "@/connection/mongoose";
import AdminUsers from "@/models/AdminUsers";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  await connectDb();
  try {
    const url = new URL(req.url);
    const param = url.searchParams.get("email");
    if (!param) {
      return NextResponse.json({ success: false, error: 'Name parameter is required' });
    }

    const del = await AdminUsers.deleteOne({ email:param });
    if (del.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
};
