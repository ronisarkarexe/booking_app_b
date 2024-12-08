import { Request, Response } from "express";
import { UserService } from "./user.service";

const login = async (req: Request, res: Response) => {
  try {
    const result = await UserService.loginUser(req.body);
    res.status(200).json({
      message: "Login Successfully!",
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

const signIn = async (req: Request, res: Response) => {
  try {
    const result = await UserService.signIn(req.body);
    res.status(200).json({
      message: "SignIn Successfully!",
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

const getUserInfo = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserInfo(
      req.headers.authorization as string
    );
    res.status(200).json({
      message: "User Get Successfully!",
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

const verifyNumber = async (req: Request, res: Response) => {
  try {
    const result = await UserService.verifyNumber(
      req.headers.authorization as string
    );
    res.status(200).json({
      message: "User verified successfully!",
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

export const UserController = {
  login,
  signIn,
  getUserInfo,
  verifyNumber
};
