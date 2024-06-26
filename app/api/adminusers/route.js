import connectDb from "@/connection/mongoose";
import AdminUsers from "@/models/AdminUsers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export const POST = async (req) => {
  await connectDb();
  try {
    const { name, email, password, role, permission } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role || "Sub Admin";
    const userPermission = permission || "all";
    const date = new Date();
    const time =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    const admin = new AdminUsers({
      name,
      email,
      password: hashedPassword,
      role: userRole,
      permission: userPermission,
      createdAt: new Date()  // Use current date and time
    });
    await admin.save()
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
