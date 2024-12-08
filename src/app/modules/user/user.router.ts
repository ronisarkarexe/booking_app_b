import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/login", UserController.login);
router.post("/signin", UserController.signIn);
router.post("/verify", UserController.verifyNumber);
router.get("/", UserController.getUserInfo);

export const UserRouter = router;
