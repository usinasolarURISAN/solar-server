import { APP_ERRORS } from '..';

class DefaultErrorPayload extends Error {
  message: string;

  code: string;

  status: number;

  constructor(errorCode = 'UM000000' as ErrorCodes) {
    super();
    this.message = APP_ERRORS[errorCode].message;
    this.code = errorCode;
    this.status = APP_ERRORS[errorCode].statusCode;
  }
}

export default DefaultErrorPayload;
