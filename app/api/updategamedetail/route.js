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
    maxWithdraw,
  } = await req.json();
  try {
    if (scratchBonus && scratchCount) {
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            scratch_card: {
              count: parseInt(scratchCount),
              bonus: parseInt(scratchBonus),
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
              count: parseInt(wheelCount),
              bonus: parseInt(wheelBonus),
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
              count: parseInt(slotCount),
              bonus: parseInt(slotBonus),
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
              count: parseInt(flipCount),
              bonus: parseInt(flipBonus),
            },
          },
        }
      );
      return NextResponse.json({ success: true });
    } else if (maxWithdraw) {
      const max_withdraw = parseInt(maxWithdraw)
      await GlobalGameStats.updateOne(
        {},
        {
          $set: {
            max_withdraw_amt:max_withdraw,
          },
        }
      );
      return NextResponse.json({ success: true });
    }
    return NextResponse({success :false, message: "You didnot request anything"})
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
