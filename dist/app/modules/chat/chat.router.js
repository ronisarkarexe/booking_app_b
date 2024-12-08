"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRouter = void 0;
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("./chat.controller");
const router = express_1.default.Router();
router.post("/create", chat_controller_1.ChatController.createChat);
router.get("/", chat_controller_1.ChatController.getAllChat);
exports.ChatRouter = router;
