

const mongoose = require('mongoose');

const WithdrawalRequestSchema = new mongoose.Schema({

    userId: String,
    bankName: String,
    accountHolderName: String,
    accountNumber: String,
    ifscCode: String,
    withdrawAmount: Number,
    upiId: String // optional
  }, {timestamps:true})

mongoose.models ={}
export default mongoose.model("WithdrawalRequest", WithdrawalRequestSchema)
