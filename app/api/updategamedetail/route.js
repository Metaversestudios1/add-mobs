import connectDb from "@/connection/mongoose";
import GlobalGameStats from "@/models/GlobalGameStats";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
  await connectDb();
  const {
    scratchCount,
    scratchBonus,
    wheelBonus,
    wheelCount,
    slotCount,
    slotBonus,
    flipCount,
    flipBonus,
  } = await req.json();
  console.log(wheelBonus, wheelCount)
  try {
    if (scratchBonus && scratchCount) {
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            scratch_card: {
              card_count: parseInt(scratchCount),
              card_bonus: parseInt(scratchBonus),
            },
          },
        }
      );
      return NextResponse.json({ success: true });
    } else if (wheelCount && wheelBonus) {
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            spin_wheel: {
              spin_count: parseInt(wheelCount),
              spin_bonus: parseInt(wheelBonus),
            },
          },
        }
      );
      return NextResponse.json({ success: true });
    } else if (slotCount && slotBonus) {
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            lucky_slot: {
              lucky_count: parseInt(slotCount),
              slot_bonus: parseInt(slotBonus),
            },
          },
        }
      );
      return NextResponse.json({ success: true });
    } else if (flipCount && flipBonus) {
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            flip_card: {
              flip_count: parseInt(flipCount),
              flip_bonus: parseInt(flipBonus),
            },
          },
        }
      );
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
