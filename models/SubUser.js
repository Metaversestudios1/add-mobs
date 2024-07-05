import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const SubUserSchema = new mongoose.Schema({
  userid: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: String, required: true },
  wallet_balance: { type: Number, default: 0 },
  is_blocked: { type: Boolean, default: false },
  daily_spin_count: { type: Number, default: 5 }, // Number of spins available daily
  last_spin_date: { type: Date }, // Last date when spins were reset

  // Additional fields as needed
});

SubUserSchema.methods.resetDailySpins = function() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to beginning of the day
  
  // Check if last spin date is before today, then reset daily_spin_count
  if (!this.last_spin_date || this.last_spin_date < today) {
    this.daily_spin_count = 5; // Reset spins for today
    this.last_spin_date = today; // Update last spin date
    console.log(this.daily_spin_count); // Log the updated daily_spin_count
    console.log(this.last_spin_date); // Log the updated last_spin_date
  }
};

mongoose.models = {};
export default mongoose.model('SubUser', SubUserSchema);
