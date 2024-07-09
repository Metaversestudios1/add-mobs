import mongoose from "mongoose";

const GamesSchema = mongoose.Schema({
    email: {type:String},
    spin_wheel_count: {type: Number},
    lucky_slot_count: {type: Number},
    scratch_card_count:{type: Number},
    flip_card_count:{type: Number},
})

mongoose.models = {};
export default mongoose.model("Games", GamesSchema);
