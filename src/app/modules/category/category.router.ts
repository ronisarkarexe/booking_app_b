import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.get("/:id", CategoryController.getSingleCategory);

router.post("/create", CategoryController.createCategory);

router.get("/", CategoryController.getAllCategory);

export const CategoryRouter = router;
