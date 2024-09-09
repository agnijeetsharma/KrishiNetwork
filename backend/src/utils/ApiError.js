class ApiError extends Error  {
  constructor(statusCode, message = "something went wrong",Error=[]) {
    ( this.status=statusCode ), ( this.message=message ),(this.Error=Error),(this.success=false);
  }
}

export { ApiError };
