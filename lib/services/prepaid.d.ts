import Kallack from "..";
import { PrepaidResponse } from "../models/types/PrepaidResponse";
import { Customer } from "../models/interfaces/customer";
import ApiResponse from "../models/types/ApiResponse";
declare type ValidateResponse = ApiResponse & {
    data: Customer;
};
export default class Prepaid {
    #private;
    constructor(kallack: Kallack, username: string, password: string);
    buy(meternumber: string, amount: number, reference: string): Promise<PrepaidResponse | null>;
    validate(meternumber: string): Promise<ValidateResponse | null>;
}
export {};
