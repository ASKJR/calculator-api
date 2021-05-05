import { Request, Response, NextFunction } from 'express';

const errorController = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = err;
  error.statusCode = err.statusCode || 500;
  error.status = err.status || 'error';

  res.status(error.statusCode).json({
    status: error.status,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default errorController;
