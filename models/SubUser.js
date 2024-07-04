import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

// User Signup Details Schema
const SubUserSchema = new mongoose.Schema({
  userid: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  password: {type: String, require: true},
  contact: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt:{type:String, required: true},
  wallet_balance: { type: Number, default: 0 },
  is_blocked: { type: Boolean, default: false },
  
});
mongoose.models = {};
export default mongoose.model('SubUser', SubUserSchema);

