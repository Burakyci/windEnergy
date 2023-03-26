export class OperationResult {
  success;
  error;
  message;
  constructor(success = true, error = undefined, message = undefined) {
    this.success = success;
    this.error = error;
    this.message = message;
  }
}
