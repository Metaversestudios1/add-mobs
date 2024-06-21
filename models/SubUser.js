const mongoose = require('mongoose');

const SubUserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true},
    contact: {type: Number, required: true},
    createdAt:{type:String, required: true},
    role: {type: String, required: true},
    permission: {type:String, required: true}
    
}, {timestamps:true})

mongoose.models ={}
export default mongoose.model("SubUser", SubUserSchema)