import connectDb from "@/connection/mongoose";
import WithdrawRequest from "@/models/WithdrawRequest";
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
    const userWithdraw = new WithdrawRequest({
      email,
      withdrawal_requests: [
      {
        bank_name,
        ac_holder_name,
        ac_number,
        ifsc_code,
        withdraw_amt,
        upi_id,
      },
    ]
    });
    await userWithdraw.save();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
