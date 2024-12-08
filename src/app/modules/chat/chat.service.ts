import { User } from "../user/user.model";
import { IChat } from "./chat.interface";
import { Chat } from "./chat.model";
import jwt from "jsonwebtoken";

const createChat = async (payload: IChat, token: string) => {
  try {
    const word = token.split(" ");
    const decoded: any = jwt.decode(word[1]);
    if (decoded) {
      const { email } = decoded;
      const user = await User.findOne({ email: email });
      if (user) {
        payload.userId = user._id;
      }
    }
    const result = await Chat.create(payload);
    return result;
  } catch (error) {
    return null;
  }
};

const getAllChat = async () => {
  const result = await Chat.find({}).populate("userId", "name email");
  return result;
};

export const ChatService = {
  createChat,
  getAllChat,
};
