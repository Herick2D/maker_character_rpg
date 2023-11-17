import express from 'express';
import { mainRouter } from './routes';

export const app = express();

app.use(express.json());
app.use(mainRouter);