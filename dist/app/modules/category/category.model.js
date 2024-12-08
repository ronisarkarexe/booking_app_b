"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.Category = (0, mongoose_1.model)("Category", CategorySchema);
