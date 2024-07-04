import mongoose from "mongoose";

const WithdrawRequestSchema = mongoose.Schema({
  email: { type: String },
  withdrawal_requests: [
    {
      bank_name: { type: String, required: true },
      ac_holder_name: { type: String, required: true },
      ac_number: { type: String, required: true },
      ifsc_code: { type: String, required: true },
      withdraw_amt: { type: Number },
      ac_type: { type: String },
      upi_id: { type: String },
    },
  ],
});

mongoose.models = {};
export default mongoose.model("WithdrawRequest", WithdrawRequestSchema);
