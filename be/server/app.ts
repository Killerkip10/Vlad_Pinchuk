import {Request, Response, NextFunction} from 'express';
import {config} from '../config';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

import {router} from './routing';

export const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan(config.morgan.type));
app.use(cors(config.cors));

app.use(express.static(__dirname + '/../fe'));

app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if(error.status !== 404) {
    console.log(error);
  }
  res.sendStatus(error.status || 500);
});
