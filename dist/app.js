"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = require("./config/cors");
const helmet_1 = require("./config/helmet");
const buildServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(cors_1.corsConfig);
    app.use(helmet_1.helmetConfig);
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            status: 200,
            message: "First Success!",
        });
    });
    app.use("/api", routes_1.default);
    return app;
};
exports.default = buildServer;
//# sourceMappingURL=app.js.map