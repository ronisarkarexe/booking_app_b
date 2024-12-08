import { Model } from "mongoose";

export interface ICategoryData {
  categoryTitle: string;
  shortDescription: string;
  categoryIcon: string;
  featuredImageUrl: string;
  category: string;
  status: boolean;
  detailedDescription: string;
  seoKeywords: string;
  buttonText: string;
  altText: string;
}

export type CategoryModel = Model<ICategoryData, object>;
