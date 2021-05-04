import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Calculator API v12',
  });
});

app.listen(3000);
