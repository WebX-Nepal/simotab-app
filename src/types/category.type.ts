import mongoose, { Document } from "mongoose"


export interface CategoryModelInterface extends Document {
    name:String,
    description:String,
    createdBy:mongoose.Schema.Types.ObjectId;
}

