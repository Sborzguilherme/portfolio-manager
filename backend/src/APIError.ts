import { HTTP_ERRORS } from './constants';

export class APIError extends Error {
  status: number;
  method: string;

  constructor({
    status = HTTP_ERRORS.INTERNAL_SERVER_ERROR.status,
    message = HTTP_ERRORS.INTERNAL_SERVER_ERROR.message,
    method,
  }: {
    status?: number;
    message?: string;
    method: string;
  }) {
    super(message);
    this.status = status;
    this.method = method;
  }
}
