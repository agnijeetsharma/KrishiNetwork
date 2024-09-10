class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = []) {
    super(message);
    this.status = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
  }
}

export { ApiError };
