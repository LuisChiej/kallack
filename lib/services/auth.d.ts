import { AuthResponse } from "../models/types/AuthResponse";
declare const auth: (username: string, password: string) => Promise<AuthResponse | null>;
export default auth;
