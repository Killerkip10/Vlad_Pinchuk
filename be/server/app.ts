import {Request, Response, NextFunction} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const morgan = require('morgan');

import {router} from './routing';

export const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction)=>{
  if(error.status !== 404) {
    console.log(error);
  }
  res.sendStatus(error.status || 500);
});
