import express from 'express';
import { mainRouter } from './routes';
import { connectToDatabase } from './model/database.model';

export const app = express();

connectToDatabase();

app.use(express.json());
app.use(mainRouter);