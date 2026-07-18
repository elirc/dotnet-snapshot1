export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
    public readonly details?: Record<string, string[]>
  ) {
    super(message);
  }

  static notFound(message: string) {
    return new ApiError(404, 'not_found', message);
  }

  static validation(details: Record<string, string[]>) {
    return new ApiError(400, 'validation_failed', 'Request validation failed', details);
  }
}
