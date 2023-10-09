import mongoose from "mongoose";

export const Options={
    OrderPlaced:"order_placed",
    OrderDelivered:"order_delivered"
}

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
   
    status:{
        type:String,
        enum:[Options.OrderDelivered,Options.OrderPlaced],
        default:Options.OrderPlaced
    },
    orderItems:[],
    orderAmount:{
        type:Number,
        required:true
    },
    isDelivered:{
        type:Boolean,
        default:false

    },
    transectionId:{
        type:String,
        required:true
    }
},{timestamps:true})


export const OrderModel=mongoose.model("Order",orderSchema)