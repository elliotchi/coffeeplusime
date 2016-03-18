import express from 'express';
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
import { join } from 'path';
import { db } from '../db';
import compression from 'compression';
import cors from 'cors';
import routeConfig from '../routes/routes';

export default app => {
  app.use(compression());
  
  let router = express.Router();
  
  app.use(morgan('dev'));
  app.use(urlencoded({
    extended: true
  }));
  app.use(json());
  
  app.use(cors());
  
  app.use('/api/coffee', router);
  routeConfig(router);
  
  app.use(express.static(join(__dirname, '../../dist')));
  
  app.use('/styles', express.static(join(__dirname, '../../node_modules/bootstrap/dist')));
}