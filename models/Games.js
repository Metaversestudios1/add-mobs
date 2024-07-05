import mongoose from "mongoose";

const GamesSchema = mongoose.Schema({
    email: {type:String},
    spin_wheel: {
        spin_count:{type: Number},
        spin_bonus: {type: Number}
    },
    lucky_slot: {
        lucky_count:{type: Number},
        slot_bonus: {type: Number}
    },
    scratch_card: {
        card_count:{type: Number},
        card_bonus: {type: Number}
    },
    flip_card: {
        flip_count:{type: Number},
        flip_bonus: {type: Number}
    }
})

mongoose.models = {};
export default mongoose.model("Games", GamesSchema);
