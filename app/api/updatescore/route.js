import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    console.log("Connecting to the database...");
    await connectDb();
    console.log("Database connected.");

    try {
        const body = await req.json();
        const { email, gameType, scoreType, bonusType, bonus} = body;

        // Construct the update object dynamically based on gameType and scoreType
        const updateObject = {
            [`${gameType}.${scoreType}`]: -1,
            [`${gameType}.${bonusType}`]: bonus
        };
        
        console.log(updateObject)
        const gameDetail = await Games.findOneAndUpdate(
            { email: email },
            { $inc: updateObject },
            { new: true }
        );

        console.log("Game detail updated:", gameDetail);

        if (gameDetail) {
            return NextResponse.json({ success: true, data: gameDetail });
        } else {
            return NextResponse.json({ success: false, data: null, message: "No game detail found." });
        }
    } catch (err) {
        console.error("Error occurred:", err);
        return NextResponse.json({ success: false, err: err });
    }
};
