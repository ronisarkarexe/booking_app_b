import { Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  isVerify: boolean;
}

export type UserModel = Model<IUser, object>;

export interface UserHeaders {
  name: string;
  email: string;
  role: string;
  isVerify: boolean;
}
