import { cleanEnv, str, port } from "envalid";
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.resolve(path.dirname(__dirname), "../.env");
// Construct the path to the .env file in the root directory
dotenv.config({ path: envFilePath });
export default cleanEnv(process.env, {
  MONGO_URL: str(),
  PORT: port(),
  JWT_SECRET: str(),
  CLOUDINARY_CLIENT_NAME: str(),
  CLOUDINARY_CLIENT_API: str(),
  CLOUDINARY_CLIENT_SECRET: str(),
  GOOGLE_CLIENT_SECRET: str(),
  GOOGLE_CLIENT_ID: str(),
  CLIENT_URL: str(),
});
