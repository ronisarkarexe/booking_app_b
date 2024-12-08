"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const chat_service_1 = require("./chat.service");
const createChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield chat_service_1.ChatService.createChat(req.body, req.headers.authorization);
        res.status(200).json({
            message: "Chat created successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
const getAllChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield chat_service_1.ChatService.getAllChat();
        res.status(200).json({
            message: "Get all successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
exports.ChatController = {
    createChat,
    getAllChat,
};
