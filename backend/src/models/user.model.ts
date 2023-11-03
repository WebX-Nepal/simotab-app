import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { UserModelType } from "../types/user.types";
import { userModelValidationMessage } from "../constants/model.constants/model.validation.message";
import crypto from "crypto";
export const roles = {
  User: "user",
  Admin: "admin",
};

const userSchema = new mongoose.Schema<UserModelType>(
  {
    name: {
      type: String,
      required: [true, userModelValidationMessage.NAME_REQUIRED_MESSGAE],
    },
    email: {
      type: String,
      required: [true, userModelValidationMessage.EMAIL_REQUIRED_MESSAGE],
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    phone: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: roles.User,
    },
    profileImageUrl: {
      url: String,
      public_id: String,
    },
    coverImageUrl: {
      url: String,
      public_id: String,
    },
    socialMediaLinks: [
      {
        url: String,
        name: String,
      },
    ],
    resetPasswordToken: {
      type: String,
    },
    resetDateExpire: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre<any>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
  next();
});
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  const user = await UserModel.findOne({ email: this.email }).select(
    "password"
  );
  console.log(user, "me");
  return await bcrypt.compare(enteredPassword, user!.password);
};
userSchema.methods.generateToken = async function (): Promise<string> {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetDateExpire = Date.now() + 10 * 60 * 1000;
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  return resetToken;
};

const UserModel = mongoose.model<UserModelType>("User", userSchema);

export default UserModel;
