import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import UserDetails from "@/models/UserDetails";
import SubUser from "@/models/SubUser";
import Ads from "@/models/Ads";

export const PUT = async (req) => {
  await connectDb();
  try {
    const body = await req.json();
    const { email, ad } = body;

    if (!email || ad === undefined) {
      return NextResponse.json({
        success: false,
        err: "Missing required fields",
      });
    }

    const costOfAd = await Ads.find();
    if (!costOfAd.length) {
      return NextResponse.json({
        success: false,
        err: "Ad costs not found",
      });
    }
    const interstitial_ad_cost = parseFloat(costOfAd[0].interstitial_ad_cost);
    const native_ad_cost = parseFloat(costOfAd[0].native_ad_cost);
    if (isNaN(interstitial_ad_cost) || isNaN(native_ad_cost)) {
      return NextResponse.json({
        success: false,
        err: "Ad costs are not valid numbers",
      });
    }
    if (ad == 1) {
      const update = await UserDetails.updateOne(
        { email: email },
        { $inc: { "ads_count.update_interstitial_ads": 1 }}
      );
      if (update.nModified === 0) {
        return NextResponse.json({
          success: false,
          err: "No document found to update",
        });
      }
      await SubUser.updateOne(
        {email: email},
        {$inc: {"wallet_balance":interstitial_ad_cost}}
      )
      await UserDetails.updateOne(
        {email: email},
        {$inc: {"wallet_balance":interstitial_ad_cost}}
      )
      return NextResponse.json({
        success: true,
        message: "you watched interestitial ads",
      });
    } else {
      const update = await UserDetails.updateOne(
        { email: email },
        { $inc:{ "ads_count.update_native_ads": 1 }}
      );
      if (update.nModified === 0) {
        return NextResponse.json({
          success: false,
          err: "No document found to update",
        });
      }
      await SubUser.updateOne(
        {email: email},
        {$inc: {"wallet_balance":native_ad_cost}}
      )
      await UserDetails.updateOne(
        {email: email},
        {$inc: {"wallet_balance":native_ad_cost}}
      )
      return NextResponse.json({
        success: true,
        message: "you watched native ads",
      });
    }
  } catch (err) {
    console.error("Update Error: ", err);
    return NextResponse.json({ success: false, err: err.message });
  }
};
