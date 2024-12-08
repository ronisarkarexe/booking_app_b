"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = require("./router");
const midd_1 = __importDefault(require("./app/midd/midd"));
exports.app = (0, express_1.default)();
exports.port = 8000;
exports.app.use((0, cors_1.default)({ credentials: true }));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use("/api/v1", router_1.Routers);
exports.app.use(midd_1.default);
exports.app.get("/", (req, res) => {
    res.json({
        message: "Working!",
        success: true,
    });
});
