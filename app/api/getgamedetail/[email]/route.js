import connectDb from "@/connection/mongoose";
import Games from "@/models/Games";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  console.log("Connecting to the database...");
  await connectDb();
  console.log("Database connected.");
  try {
    const email = params.email

    const gameDetail = await Games.findOne({ email: email });
    console.log("Game detail retrieved:", gameDetail);

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
