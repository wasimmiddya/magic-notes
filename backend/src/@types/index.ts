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