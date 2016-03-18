import express from 'express';
import { db } from './db';
import middleware from './config/middleware';

const app = express();

middleware(app);

export default app;