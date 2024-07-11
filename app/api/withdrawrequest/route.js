import connectDb from "@/connection/mongoose";
import UserDetails from "@/models/UserDetails";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDb();
  try {
    const {
      email,
      bank_name,
      ac_holder_name,
      ac_number,
      ifsc_code,
      withdraw_amt,
      upi_id,
    } = await req.json();
    const user = await UserDetails.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    user.withdrawal_requests.push({
      bank_name,
      ac_holder_name,
      ac_number,
      ifsc_code,
      withdraw_amt,
      upi_id,
    });
    user.withdrawal_history.push({
      withdraw_amt,
    });

    await user.save();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, err: err });
  }
};
