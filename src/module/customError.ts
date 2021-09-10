export class CustomError extends Error {
  public status: number;
  constructor(public message: string) {
    super();
    this.message = message;
    this.status = 404;
  }
}
