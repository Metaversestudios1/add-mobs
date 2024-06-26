import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await connectDb();
  const {
    spinCount,
    flipCount,
    slotCount,
    scratchCount,
    dailyBonus,
    adsBonus,
    loginBonus,
    slotBonus,
    spinBonus,
    maxWithdraw,
  } = await req.json();
  try {
    await Games.updateMany(
      {},
      {
        $set: {
          spin_wheel: { spin_count: spinCount, spin_bonus: spinBonus },
          lucky_slot: { lucky_count: slotCount, slot_bonus: slotBonus },
          scratch_card: { card_count: scratchCount },
          flip_card: { flip_count: flipCount },
          daily_bonus: dailyBonus,
          ads_bonus: adsBonus,
          login_bonus: loginBonus,
          max_withdraw_amt: maxWithdraw,
        },
      }
    );
    return NextResponse.json({success: true})
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
