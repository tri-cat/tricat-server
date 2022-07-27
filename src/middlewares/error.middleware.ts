import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@utils/logger';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(404).json({ message: "This route doesn't exist in the API" });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
