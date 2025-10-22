"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notsuccess = exports.success = void 0;
const success = (res, data, message = "OK", statusCode = 200, oke = true, token) => {
    const response = {
        ok: oke,
        success: true,
        status_code: statusCode,
        message,
        data,
        token,
    };
    return res.status(statusCode).json(response);
};
exports.success = success;
const notsuccess = (res, message, statusCode = 500, oke = false) => {
    const response = {
        ok: oke,
        success: false,
        status_code: statusCode,
        message: message || "Internal Server Error",
    };
    return res.status(statusCode).json(response);
};
exports.notsuccess = notsuccess;
//# sourceMappingURL=response.js.map