import { model, Schema } from "mongoose";
import { ICategoryData } from "./category.interface";

const CategorySchema = new Schema<ICategoryData>(
  {
    categoryTitle: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    categoryIcon: {
      type: String,
      required: false,
    },
    featuredImageUrl: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    detailedDescription: {
      type: String,
      required: false,
    },
    seoKeywords: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model<ICategoryData>("Category", CategorySchema);
