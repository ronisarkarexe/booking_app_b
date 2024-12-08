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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.loginUser(req.body);
        res.status(200).json({
            message: "Login Successfully!",
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
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.signIn(req.body);
        res.status(200).json({
            message: "SignIn Successfully!",
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
const getUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUserInfo(req.headers.authorization);
        res.status(200).json({
            message: "User Get Successfully!",
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
const verifyNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.verifyNumber(req.headers.authorization);
        res.status(200).json({
            message: "User verified successfully!",
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
exports.UserController = {
    login,
    signIn,
    getUserInfo,
    verifyNumber
};
