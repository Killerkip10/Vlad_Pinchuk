import {Router} from 'express';

import {router as userRouter} from './user';
import {router as authRouter} from './authorization';
import {router as adminUserRouter} from './moderation/user';
import {checkToken, checkAdmin} from '../middlewares';

export const router = Router();

router.get('/', (req, res, next) => res.redirect('index.html'));
router.use('/', authRouter);

router.use(checkToken);
router.use('/', userRouter);

router.use(checkAdmin);
router.use('/', adminUserRouter);
