import mongoose, { Document } from "mongoose";


export interface ContactModelInterface extends Document {
    name:string,
    phone:string,
    email?:string,
    user:mongoose.Schema.Types.ObjectId


}


export interface createContactInterface {
    name:string,
    phone:string,
    email?:string,
}