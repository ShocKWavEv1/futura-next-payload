export class ApiFailedError extends Error {
  constructor(message = "It seems like the application is running an error") {
    super(message);
    this.name = "ApiFailedError";
  }
}

export class Base64FailedError extends Error {
  constructor(
    message = "It seems like there was an error while generating the base64 image"
  ) {
    super(message);
    this.name = "Base64FailedError";
  }
}
