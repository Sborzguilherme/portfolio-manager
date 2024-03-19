export class APIError extends Error {
  status: number;
  method: string;

  constructor({ status, message, method }: { status?: number; message?: string; method: string }) {
    super(message);
    this.status = status;
    this.method = method;
  }
}
