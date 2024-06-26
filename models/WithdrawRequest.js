import mongoose from "mongoose";

const WithdrawRequestSchema = mongoose.Schema({
    email: {type: String},
    withdrawal_requests: [
      {
        bank_name: { type: String },
        ac_holder_name: { type: String },
        ac_number: { type: String },
        ifsc_code: { type: String },
        withdraw_amt: { type: Number },
        upi_id: { type: String },
      },
    ],
})


mongoose.models = {};
export default mongoose.model("WithdrawRequest", WithdrawRequestSchema);
