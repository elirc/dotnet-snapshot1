import type { ApiErrorResponse } from '@atlas/shared/errors';

export class ApiClientError extends Error {
  constructor(public readonly response: ApiErrorResponse, public readonly status: number) {
    super(response.error.message);
  }

  get fieldErrors() {
    return this.response.error.details ?? {};
  }
}

export function getErrorMessage(error: unknown) {
  return error instanceof ApiClientError ? error.message : 'Something went wrong. Please try again.';
}
