import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import AppError from 'src/shared/errors/AppError';
import routes from 'src/shared/routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1', routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333! 🚀');
});
