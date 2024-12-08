"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/login", user_controller_1.UserController.login);
router.post("/signin", user_controller_1.UserController.signIn);
router.post("/verify", user_controller_1.UserController.verifyNumber);
router.get("/", user_controller_1.UserController.getUserInfo);
exports.UserRouter = router;
