import { Document } from "mongoose";

export interface FaqModelInterface extends Document {
    question:string,
    answer:string
    
}



export interface createfaqInterface {
    question:string,
    answer:string
}