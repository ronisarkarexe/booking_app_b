import express, { Request, Response } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import { Routers } from "./router";
import globalMidd from "./app/midd/midd";

export const app = express();
export const port = 8000;

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", Routers);

app.use(globalMidd);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Working!",
    success: true,
  });
});
