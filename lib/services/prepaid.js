"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
class Prepaid {
    #kallack;
    #username;
    #password;
    constructor(kallack, username, password) {
        this.#kallack = kallack;
        this.#username = username;
        this.#password = password;
    }
    async buy(meternumber, amount, reference) {
        try {
            const token = await (0, auth_1.default)(this.#username, this.#password);
            if (token === null)
                return null;
            const { status, data } = await this.#kallack.axios.post('/energy/aedc/prepaid/vend', {
                meter: meternumber,
                amount,
                vendorReference: reference
            }, {
                headers: {
                    Authorization: `bearer ${token.data.token}`
                }
            });
            return status === 200 ? data : null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async validate(meternumber) {
        try {
            const token = await (0, auth_1.default)(this.#username, this.#password);
            if (token === null)
                return null;
            const { status, data } = await this.#kallack.axios.get(`energy/aedc/prepaid/validate/${meternumber}`, {
                headers: {
                    Authorization: `bearer ${token.data.token}`
                }
            });
            return status === 200 ? data : null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}
exports.default = Prepaid;
