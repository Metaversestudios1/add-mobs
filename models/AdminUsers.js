const { default: mongoose } = require("mongoose");

const AdminUsersSchema = mongoose.Schema({
    name:{type: String},
    email: {type: String, required:true},
    password: {type:String, required:true},
    permission:{type: String},
    role:{type: String},
    createdAt: { type: Date, default: Date.now }
})

mongoose.models = {};
export default mongoose.model('AdminUsers', AdminUsersSchema);