const mongoose = require('mongoose');

const AdsCountSchema = new mongoose.Schema({

    userId: String,
    updateInterstitialAds: Number,
    updateNativeAds: Number,
    updateWalletBalance: Number
  }, {timestamps:true})

mongoose.models ={}
export default mongoose.model("AdsCount", AdsCountSchema)