import path from 'path';
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import json from 'koa-json';
import { config } from 'dotenv';
import pkg from 'mongoose';
import AppRoutes from './routes.js';
import errorHandler from './middlewares/errorHandler.js';
import serverMessage from './constants/serverMessage.js';

config();

const app = new Koa();
const router = new Router();
const { connect, connection } = pkg;
const port = process.env.PORT || 5000;

app.use(serve('./public/images'));

app.listen(5500);
app
  .use(errorHandler)
  .use(cors())
  .use(bodyParser())
  .use(json())
  .use(router.routes())
  .use(router.allowedMethods());

AppRoutes.forEach((route) => router[route.method](route.path, route.action));

const main = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    const db = connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    app.listen(port, () => {
      console.log(serverMessage.SERVER_RUN_SUCCESS);
    });
  } catch (err) {
    console.error(serverMessage.ITERNAL_SERVER_ERROR, err);
  }
};

main();
