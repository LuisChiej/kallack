"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const auth = async (username, password) => {
    try {
        const data = await axios_1.default.post('https://api.energyhub.com.ng/api/auth/webtoken', {
            username,
            password
        });
        return data.status === 200 ? data.data : null;
    }
    catch (e) {
        return null;
    }
};
exports.default = auth;
