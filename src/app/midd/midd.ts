import { NextFunction, Request, Response } from "express";

const globalMidd = async (
  err: any,
  red: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  res.status(statusCode).json({
    message,
    stack: err.stack,
    success: false,
  });
  next();
};

export default globalMidd;
