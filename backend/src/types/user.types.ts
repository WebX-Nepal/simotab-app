import { Document } from "mongoose";
import { Request } from "express";

export type UserSignInType = {
  name: String;
  email: string;
  phone?: string;
  password: string;
};

interface UserLinkInterface {
  url: string;
  name: string;
}
interface Image {
  url: string;
  public_id: string;
}

export interface UserModelType extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  profileImageUrl: Image;
  socialMediaLinks: UserLinkInterface[];
  coverImageUrl: Image;
  resetDateExpire: Date | undefined;
  resetPasswordToken: string | undefined;

  comparePassword: (password: string) => Promise<boolean>;
  generateToken: () => Promise<string>;
}

export interface GoogleTokenResult {
  iss?: string;
  azp?: string;
  aud?: string;
  sub?: string;
  email?: string;
  email_verified?: string;
  nbf?: string;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  locale?: string;
  iat?: string;
  exp?: string;
  jti?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}
