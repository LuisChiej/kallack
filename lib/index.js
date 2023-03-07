"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const postpaid_1 = __importDefault(require("./services/postpaid"));
const prepaid_1 = __importDefault(require("./services/prepaid"));
class Kallack {
    _username;
    _password;
    _axios;
    prepaid;
    postpaid;
    constructor(username, password, environment) {
        this._username = username;
        this._password = password;
        const instance = axios_1.default.create({
            baseURL: environment === 'development' ? 'https://api.energyhub.com.ng/demo' : 'https://api.energyhub.com.ng/v1'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;
        this.prepaid = new prepaid_1.default(this, this._username, this._password);
        this.postpaid = new postpaid_1.default(this, this._username, this._password);
    }
    get axios() {
        return this._axios;
    }
}
exports.default = Kallack;
