"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../app/modules/user/user.router");
const category_router_1 = require("../app/modules/category/category.router");
const chat_router_1 = require("../app/modules/chat/chat.router");
const router = express_1.default.Router();
const modules = [
    {
        path: "/user",
        router: user_router_1.UserRouter,
    },
    {
        path: "/category",
        router: category_router_1.CategoryRouter,
    },
    {
        path: "/chat",
        router: chat_router_1.ChatRouter,
    },
];
modules.forEach((route) => router.use(route.path, route.router));
exports.Routers = router;
