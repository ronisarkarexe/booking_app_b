"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.createCategory(req.body);
        res.status(200).json({
            message: "Category created successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
const getSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield category_service_1.CategoryService.getSingleCategory(id);
        res.status(200).json({
            message: "Get successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getAllCategory();
        res.status(200).json({
            message: "Get all successfully!",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
        });
    }
});
exports.CategoryController = {
    createCategory,
    getSingleCategory,
    getAllCategory,
};
