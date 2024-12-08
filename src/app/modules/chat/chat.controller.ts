import { Request, Response } from "express";
import { ChatService } from "./chat.service";

const createChat = async (req: Request, res: Response) => {
  try {
    const result = await ChatService.createChat(
      req.body,
      req.headers.authorization as string
    );
    res.status(200).json({
      message: "Chat created successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const getAllChat = async (req: Request, res: Response) => {
  try {
    const result = await ChatService.getAllChat();
    res.status(200).json({
      message: "Get all successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const ChatController = {
  createChat,
  getAllChat,
};
