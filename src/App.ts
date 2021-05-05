import express from 'express';
import cors from 'cors';

import { CORS_OPTS } from './common/Const';
import apiV1Routes from './routes/v1/Routes';
import AppError from './common/AppError';
import globalErrorHandler from './common/ErrorController';

const app = express();

app.use(cors(CORS_OPTS));
app.use(express.json());

app.get('/calculator-api', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'healthcheck',
  });
});

app.use('/calculator-api/v1', apiV1Routes);

app.all('*', (req, res, next) => {
  next(
    new AppError(404, 'fail', `Can't find ${req.originalUrl} on this server!`)
  );
});

app.use(globalErrorHandler);

app.listen(3000);
