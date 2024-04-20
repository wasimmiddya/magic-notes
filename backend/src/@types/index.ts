import { Request } from "express";

export interface ApiResponseInfer {
    statusCode: number;
    data: Object;
    message: string;
    success: boolean;
}

export interface ApiErrorInfer {
    statusCode: number;
    data: null | Object;
    message: string;
    success: boolean;
    errors: Error[];
    stack?: string;
}

export interface UserBody {
    username: string,
    email: string,
    password: string,
    conPassword: string,
    avater: string
}



export interface TypedRequest<T> extends Request {
    body: T,
    files: any
}