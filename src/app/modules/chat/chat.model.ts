import { model, Schema } from "mongoose";
import { ChatModel, IChat } from "./chat.interface";

const ChatSchema = new Schema<IChat, ChatModel>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    chat: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Chat = model<IChat, ChatModel>("Chat", ChatSchema);
