import connectDb from "@/connection/mongoose";
import AdminUsers from "@/models/AdminUsers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const PUT = async (req) => {
  await connectDb();
  try {
    const { param, name, email, password, permission } = await req.json();
    
    // Validate required fields
    if (!param || !name || !email || !password || !permission) {
      return NextResponse.json({ success: false, err: "Missing required fields" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Prepare the update data
    const updateData = {
      name,
      email,
      password: hashedPassword,
      permission,
      createdAt: new Date()  // Ensure createdAt is a Date object
    };

    // Perform the update operation
    const update = await AdminUsers.updateOne(
      { _id: param },
      { $set: updateData }
    );

    if (update.nModified === 0) {
      return NextResponse.json({ success: false, err: "No document found to update" });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Update Error: ", err);
    return NextResponse.json({ success: false, err: err.message });
  }
};
