import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Database Connection Error';

  constructor() {
    super('Database Connection Error');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  // serializeErrors(): { message: string; field?: string }[];

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
