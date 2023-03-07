import { Customer } from "../interfaces/customer";
import { Unit } from "../interfaces/unit";
import { Vat } from "../interfaces/vat";
import ApiResponse from "./ApiResponse";
export declare type PrepaidResponse = ApiResponse & {
    data: {
        amount: number;
        meter: string;
        transactionReference: string;
        vendorReference: string;
        reprint: boolean;
        serviceReference: string;
        token: string;
        time: number;
        customer: Customer;
        units: Unit;
        vat: Vat;
    };
};
