const mongoose = require('mongoose');

const BalanceSchema = new mongoose.Schema({
    walletBalance: Number
  }, {timestamps:true})

mongoose.models ={}
export default mongoose.model("Balance", BalanceSchema)