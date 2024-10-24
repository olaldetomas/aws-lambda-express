import express, { Application, json } from 'express';

const app: Application = express();

app.use(json());

app.get('/', async (_, res) => {
  res.json({ message: 'Hello from lambda!' });
});

export { app };
