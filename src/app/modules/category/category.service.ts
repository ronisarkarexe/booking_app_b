import { ICategoryData } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: ICategoryData) => {
  const result = await Category.create(payload);
  return result;
};

const getSingleCategory = async (id: string) => {
  const result = await Category.findOne({ _id: id });
  return result;
};

const getAllCategory = async () => {
  const result = await Category.find({});
  return result;
};

export const CategoryService = {
  createCategory,
  getSingleCategory,
  getAllCategory,
};
