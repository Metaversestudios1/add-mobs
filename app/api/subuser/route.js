import connectDb from "@/connection/mongoose";
import SubUser from "@/models/SubUser";
import UserDetails from "@/models/UserDetails";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Games from "@/models/Games";

export const POST = async (req) => {
  await connectDb();
  try {
    const { name, email, contact, password} =
      await req.json();
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
    const hashedPassword = await bcrypt.hash(password, 10);

    let subuser = new SubUser({
      name,
      email,
      password: hashedPassword,
      contact,
      createdAt: time,
    });
    const newUser = await subuser.save();
    const userDetails = new UserDetails({
      email: newUser.email,
      wallet_balance: newUser.wallet_balance,
      withdrawal_requests: [],
      withdrawal_history: [], 
      ads_count: {
        userid: newUser.userid,
        update_interstitial_ads: 0,
        update_native_ads: 0,
        update_wallet_balance: 100,
      },
    });

    await userDetails.save();
    const updateGameDetail = new Games({
      email: newUser.email,
      spin_wheel: {
        spin_count: 5,
        spin_bonus:1000
      },

      lucky_slot: {
        lucky_count: 5,
        slot_bonus: 1000
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
