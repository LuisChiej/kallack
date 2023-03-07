import { Customer } from "../interfaces/customer";
import ApiResponse from "./ApiResponse";
export declare type PostpaidResponse = ApiResponse & {
    data: {
        amount: number;
        transactionReference: string;
        vendorReference: string;
        reprint: boolean;
        serviceReference: string;
        token: string;
        time: number;
        customer: Customer;
    };
};
