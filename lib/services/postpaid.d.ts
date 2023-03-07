import Kallack from "..";
import { Customer } from "../models/interfaces/customer";
import ApiResponse from "../models/types/ApiResponse";
import { PostpaidResponse } from "../models/types/PostpaidResponse";
declare type ValidateResponse = ApiResponse & {
    data: Customer;
};
export default class Postpaid {
    #private;
    constructor(kallack: Kallack, username: string, password: string);
    buy(account: string, amount: number, reference: string): Promise<PostpaidResponse | null>;
    validate(accountnumber: string): Promise<ValidateResponse | null>;
}
export {};
