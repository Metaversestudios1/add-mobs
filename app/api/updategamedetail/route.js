import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
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
  try {
    if (scratchBonus && scratchCount) {
      await Games.updateMany(
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
      await Games.updateMany(
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
      await Games.updateMany(
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
      await Games.updateMany(
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
