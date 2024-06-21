const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true, unique: true},
    mediaUrl:{type: String},
    price: {type: Number, required: true},
    createdAt:{type:String, required: true},
    stock: {type: Number, required: true}
    
}, {timestamps:true})

mongoose.models ={}
export default mongoose.model("Product", ProductSchema)