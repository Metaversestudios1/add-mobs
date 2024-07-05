import mongoose from "mongoose";

const GlobalGameStatsSchema = mongoose.Schema({
    spin_wheel: {
        spin_count:{type: Number, default: 5},
        spin_bonus: {type: Number, default: 1000}
    },
    lucky_slot: {
        lucky_count:{type: Number, default: 5},
        slot_bonus: {type: Number, default: 1000}
    },
    scratch_card: {
        card_count:{type: Number, default: 5},
        card_bonus: {type: Number, default: 1000}
    },
    flip_card: {
        flip_count:{type: Number, default: 5},
        flip_bonus: {type: Number, default: 1000}
    },
    daily_bonus: {type: Number, default:500},
    ads_bonus: {type: Number, default:1500},
    login_bonus: {type: Number, default:2000},
})

mongoose.models = {};
export default mongoose.model("GlobalGameStats.", GlobalGameStatsSchema);
