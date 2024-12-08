import express from "express";
import { UserRouter } from "../app/modules/user/user.router";
import { CategoryRouter } from "../app/modules/category/category.router";
import { ChatRouter } from "../app/modules/chat/chat.router";
const router = express.Router();

const modules = [
  {
    path: "/user",
    router: UserRouter,
  },
  {
    path: "/category",
    router: CategoryRouter,
  },
  {
    path: "/chat",
    router: ChatRouter,
  },
];

modules.forEach((route) => router.use(route.path, route.router));

export const Routers = router;
