import { Model, Types } from "mongoose";

export interface IChat {
  name: string;
  phone: string;
  chat: string;
  userId: Types.ObjectId;
}

export type ChatModel = Model<IChat, object>;
