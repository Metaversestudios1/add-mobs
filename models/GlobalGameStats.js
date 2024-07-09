import mongoose from "mongoose";

const GlobalGameStatsSchema = mongoose.Schema({
    spin_wheel: {
        count:{type: Number, default: 5},
        bonus: {type: Number, default: 1000}
    },
    lucky_slot: {
        count:{type: Number, default: 5},
        bonus: {type: Number, default: 1000}
    },
    scratch_card: {
        count:{type: Number, default: 5},
        bonus: {type: Number, default: 1000}
    },
    flip_card: {
        count:{type: Number, default: 5},
        bonus: {type: Number, default: 1000}
    },
    daily_bonus: {type: Number, default:500},
    ads_bonus: {type: Number, default:1500},
    login_bonus: {type: Number, default:2000},
    max_withdraw_amt: {type: Number, default: 100000}
})

mongoose.models = {};
export default mongoose.model("GlobalGameStats.", GlobalGameStatsSchema);
