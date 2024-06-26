import connectDb from "@/connection/mongoose";
import SubUser from "@/models/SubUser";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await connectDb();
  try {
    const { param, name, email, contact, role } = await req.json();
    
    if (param && name && email && contact && role) {
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
        
      await SubUser.updateOne(
        { name: param },
        { $set: { name, email, contact, role, createdAt: time } }
      );
      return NextResponse.json({ success: true });
    } else if (email) {
      // Retrieve the current `is_blocked` state
      const user = await SubUser.findOne({ email: email });
      
      if (user) {
        // Toggle the `is_blocked` state
        const newBlockedState = !user.is_blocked;
        
        // Update the user with the new `is_blocked` state
        await SubUser.updateOne(
          { email: email },
          { $set: { is_blocked: newBlockedState } }
        );
        return NextResponse.json({ success: true, newBlockedState });
      } else {
        return NextResponse.json({ success: false, message: "User not found" });
      }
    } else {
      return NextResponse.json({ success: false, message: "Missing required fields" });
    }
  } catch (err) {
    return NextResponse.json({ err: err });
  }
};
