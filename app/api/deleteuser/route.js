

import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
import SubUser from "@/models/SubUser";
import UserDetails from "@/models/UserDetails";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  await connectDb();
  try {
    const url = new URL(req.url);
    const param = url.searchParams.get("email");
    if (!param) {
      return NextResponse.json({ success: false, error: 'Name parameter is required' });
    }

    const del = await SubUser.deleteOne({ email:param });
    const del2 = await Games.deleteOne({email:param})
    const del3 = await UserDetails.deleteOne({email:param})
    if (del.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
};
