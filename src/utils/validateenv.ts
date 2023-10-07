import { cleanEnv,str,port } from "envalid";
import "dotenv/config";
export default  cleanEnv(process.env, {
    MONGO_URL:str(),
    PORT:port(),
    JWT_SECRET:str(),
    CLOUDINARY_CLIENT_NAME:str(),
    CLOUDINARY_CLIENT_API:str(),
    CLOUDINARY_CLIENT_SECRET:str(),
    GOOGLE_CLIENT_SECRET:str(),
    GOOGLE_CLIENT_ID:str(),
    CLIENT_URL:str(),
    STRIPE_SECRET_KEY:str()
    
    
});

