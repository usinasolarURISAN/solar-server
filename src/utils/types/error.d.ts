/**
 * All error codes used on project.
 */
declare type ErrorCodes = 'UM000000' | 'VL000000';

/**
 * Type mapper of error codes.
 */
declare type GenericErrorCodesMapper<T = string> = {
  [error in ErrorCodes]: T;
};

/**
 * Defines the default error payload for each erro code on app.
 */
declare type AppError = {
  statusCode: number;
  message: string;
};

/**
 * Type defining the default error format.
 */
declare type DefaultErrorPayloadType = {
  message: string;
  code: ErrorCodes;
  status: number;
};
