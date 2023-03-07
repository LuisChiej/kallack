import { AxiosInstance } from "axios";
import Postpaid from "./services/postpaid";
import Prepaid from "./services/prepaid";
export default class Kallack {
    private _username;
    private _password;
    private _axios;
    prepaid: Prepaid;
    postpaid: Postpaid;
    constructor(username: string, password: string, environment: 'development' | 'production');
    get axios(): AxiosInstance;
}
