import mongoose from "mongoose";

const UserDetailsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, ref: "UserSignupDetails" },

    wallet_balance: { type: Number, default: 0 },
    // Withdrawal request details
    withdrawal_requests: [
      {
        user_id: { type: String },
        bank_name: { type: String },
        ac_holder_name: { type: String },
        ac_number: { type: String },
        ifsc_code: { type: String },
        withdraw_amt: { type: Number },
        upi_id: { type: String },
      },
    ],
    // Withdrawal history details
    withdrawal_history: [
      {
        date: { type: Date, default: Date.now },
        credit_amt: { type: Number },
        debit_amt: { type: Number },
        wallet_balance: { type: Number },
        withdraw_amt: { type: Number },
      },
    ],
    // User ads count details
    ads_count: {
      userid: { type: String },
      update_interstitial_ads: { type: Number },
      update_native_ads: { type: Number },
      update_wallet_balance: { type: Number },
    },
    account_details: [
      {
        bank_name: { type: String, required: true },
        ac_holder_name: { type: String, required: true },
        ac_number: { type: String, required: true },
        ifsc_code: { type: String, required: true },
        ac_type: { type: String },
        upi_id: { type: String },
      },
    ],
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("UserDetails", UserDetailsSchema);
