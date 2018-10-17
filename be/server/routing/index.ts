import * as express from 'express';

import {router as userRouter} from './user';

export const router = express.Router();

router.get('/', (req, res, next)=> res.redirect('index.html'));
router.use('/', userRouter);