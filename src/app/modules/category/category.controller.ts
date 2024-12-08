import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.status(200).json({
      message: "Category created successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.getSingleCategory(id);
    res.status(200).json({
      message: "Get successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategory();
    res.status(200).json({
      message: "Get all successfully!",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

export const CategoryController = {
  createCategory,
  getSingleCategory,
  getAllCategory,
};
