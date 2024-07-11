import connectDb from "@/connection/mongoose";
import UserDetails from "@/models/UserDetails";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectDb();
  try {
    const body = await req.json();
    const { email, ac_holder_name, ac_number, ifsc_code, ac_type, bank_name } = body;
    const bankDetails = { ac_holder_name, ac_number, ifsc_code, ac_type, bank_name };


    if (!email || !ac_holder_name || !ac_number || !ifsc_code || !bank_name) {
      return NextResponse.json({ error: "Email and all bank details are required" }, { status: 400 });
    }

    // Find the user by email and update account details
    const updatedUser = await UserDetails.findOneAndUpdate(
      { email: email },
      { $push: { account_details: bankDetails } },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log('Updated User:', updatedUser);

    return NextResponse.json({
      success: true,
      account_details: updatedUser.account_details,
    }, { status: 200 });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
};
