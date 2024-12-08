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
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signIn = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const isEmailTaken = yield user_model_1.User.findOne({ email });
    if (isEmailTaken) {
        throw new Error("Email is already registered");
    }
    const newUser = yield user_model_1.User.create(payload);
    const accessToken = jsonwebtoken_1.default.sign({ email: newUser.email, id: newUser._id, role: newUser.role }, process.env.JWT_SECRET || "default_secret_key", { expiresIn: "7d" });
    return {
        accessToken,
    };
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const isExistUser = yield user_model_1.User.findOne({ email });
    if (!isExistUser) {
        throw new Error("User not found");
    }
    const match = yield bcrypt_1.default.compare(password, isExistUser.password);
    if (!match) {
        throw new Error("Invalid password");
    }
    const accessToken = jsonwebtoken_1.default.sign({ email: isExistUser.email, id: isExistUser._id, role: isExistUser.role }, process.env.JWT_SECRET || "default_secret_key", { expiresIn: "7d" });
    return {
        accessToken,
    };
});
const getUserInfo = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const word = token.split(" ");
        const decoded = jsonwebtoken_1.default.decode(word[1]);
        if (decoded) {
            const { email } = decoded;
            const user = yield user_model_1.User.findOne({ email: email });
            if (user) {
                return {
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    isVerify: user.isVerify,
                };
            }
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
const verifyNumber = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const word = token.split(" ");
        const decoded = jsonwebtoken_1.default.decode(word[1]);
        if (decoded) {
            const result = yield user_model_1.User.updateOne({ email: decoded.email }, { $set: { isVerify: true } });
            if (result.modifiedCount > 0) {
                return result;
            }
            else {
                return null;
            }
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
exports.UserService = {
    loginUser,
    signIn,
    getUserInfo,
    verifyNumber,
};
