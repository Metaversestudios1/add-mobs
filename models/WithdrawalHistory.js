

const mongoose = require('mongoose');

const WithdrawalHistorySchema = new mongoose.Schema({

    date: Date,
    creditAmount: Number,
    debitAmount: Number,
    walletBalance: Number,
    withdrawAmount: Number
  }, {timestamps:true})

mongoose.models ={}
export default mongoose.model("WithdrawalHistory", WithdrawalHistorySchema)
