export class CustomError extends Error {
  public status: number;
  constructor(public message: string) {
    super(message);
    this.message = message;
    this.status = 500;
  }
}
