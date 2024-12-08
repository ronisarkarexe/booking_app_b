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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const user_model_1 = require("../user/user.model");
const chat_model_1 = require("./chat.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createChat = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const word = token.split(" ");
        const decoded = jsonwebtoken_1.default.decode(word[1]);
        if (decoded) {
            const { email } = decoded;
            const user = yield user_model_1.User.findOne({ email: email });
            if (user) {
                payload.userId = user._id;
            }
        }
        const result = yield chat_model_1.Chat.create(payload);
        return result;
    }
    catch (error) {
        return null;
    }
});
const getAllChat = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chat_model_1.Chat.find({}).populate("userId", "name email");
    return result;
});
exports.ChatService = {
    createChat,
    getAllChat,
};
