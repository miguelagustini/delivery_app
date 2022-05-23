import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength:60
    },

    desc:{
        type: String,
        required: true
    },

    img:{
        type: String,
        required: true
    },

    price:{
        type: [Number],
        required: true
    },

    status:{
        type: Boolean,
        required: true,
        default: true
    },
},
    {timestamps:true}
)


export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);