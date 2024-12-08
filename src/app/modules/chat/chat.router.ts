import express from "express";
import { ChatController } from "./chat.controller";

const router = express.Router();

router.post("/create", ChatController.createChat);
router.get("/", ChatController.getAllChat);

export const ChatRouter = router;
