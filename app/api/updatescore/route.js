// import connectDb from "@/connection/mongoose";
// import Games from "@/models/Games";
// import { NextResponse } from "next/server";

// export const POST = async (req) => {
//     console.log("Connecting to the database...");
//     await connectDb();
//     console.log("Database connected.");

//     try {
//         const body = await req.json();
//         const { email, gameType, scoreType, bonusType, bonus} = body;

//         // Construct the update object dynamically based on gameType and scoreType
//         const updateObject = {
//             [`${gameType}.${scoreType}`]: -1,
//             [`${gameType}.${bonusType}`]: bonus
//         };

//         console.log(updateObject)
//         const gameDetail = await Games.findOneAndUpdate(
//             { email: email },
//             { $inc: updateObject },
//             { new: true }
//         );

//         console.log("Game detail updated:", gameDetail);

//         if (gameDetail) {
//             return NextResponse.json({ success: true, data: gameDetail });
//         } else {
//             return NextResponse.json({ success: false, data: null, message: "No game detail found." });
//         }
//     } catch (err) {
//         console.error("Error occurred:", err);
//         return NextResponse.json({ success: false, err: err });
//     }
// };

import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
import GlobalGameStats from "@/models/GlobalGameStats";
import SubUser from "@/models/SubUser";
import UserDetails from "@/models/UserDetails";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  console.log("Connecting to the database...");
  await connectDb();
  console.log("Database connected.");

  try {
    const body = await req.json();
    const { email, gameName} = body;
    if ((!email, !gameName)) {
      return NextResponse.json({
        success: false,
        message: "Fields are requiredd",
      });
    }
    const updateObject = {
      [`${gameName}_count`]: -1,
    };
    const globaldataArray = await GlobalGameStats.find();
    if (globaldataArray.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Global game stats not found",
      });
    }

    const globaldata = globaldataArray[0];
    if (!globaldata[gameName] || typeof globaldata[gameName].bonus !== 'number') {
      return NextResponse.json({
        success: false,
        message: "Invalid game name or bonus type",
      });
    }
    const globalBonus = globaldata[gameName].bonus;

    const gameDetail = await Games.findOneAndUpdate(
      { email: email },
      { $inc: updateObject },
      { new: true }
    );

    if (gameDetail) {
        await SubUser.findOneAndUpdate(
            { email },
            { $inc: { wallet_balance:  globalBonus }}
        );
        await UserDetails.findOneAndUpdate(
            { email },
            { $inc: { wallet_balance:  globalBonus }}
        );

        return NextResponse.json({ success: true, message: `You play ${gameName} game` });
    } else {
      return NextResponse.json({
        success: false,
        data: null,
        message: "No game detail found.",
      });
    }
  } catch (err) {
    console.error("Error occurred:", err);
    return NextResponse.json({ success: false, err: err });
  }
};
