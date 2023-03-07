import ApiResponse from "./ApiResponse";
export declare type AuthResponse = ApiResponse & {
    data: {
        token: string;
        expires: bigint;
    };
};
