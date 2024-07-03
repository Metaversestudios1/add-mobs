import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import SubUser from "@/models/SubUser";
import UserDetails from "@/models/UserDetails";
import Games from "@/models/Games";
export const POST = async (req) => {
  await connectDb();
  try {
    const { name, email, password, contact } = await req.json();
    console.log(name, email, password, contact)
    const hashedPassword = await bcrypt.hash(password, 10);
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
    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        error: "Must provide all the fields",
      });
    }
    const user = new SubUser({
      name,
      email,
      password: hashedPassword,
      contact,
      createdAt: time,
    });
    await user.save();
    const userDetails = new UserDetails({
      email: user.email,
      wallet_balance: user.wallet_balance,
      withdrawal_requests: [],
      withdrawal_history: [],
      ads_count: {
        userid: user.userid,
        update_interstitial_ads: 0,
        update_native_ads: 0,
        update_wallet_balance: 100,
      },
    });

    await userDetails.save();
    const updateGameDetail = new Games({
      email: user.email,
      spin_wheel: {
        spin_count: 5,
        spin_bonus: 1000,
      },

      lucky_slot: {
        lucky_count: 5,
        slot_bonus: 1000,
      },

      scratch_card: {
        card_count: 5,
      },

      flip_card: {
        flip_count: 5,
      },
      daily_bonus: 1000,
      ads_bonus: 1000,
      login_bonus: 1000,
      max_wihdraw_amt: 100000,
    });
    await updateGameDetail.save();
    return NextResponse.json({ success: "success" });
  } catch (err) {
    return NextResponse.json({ err: err });
  }
};
