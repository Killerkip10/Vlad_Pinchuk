import {Router} from 'express';

import * as controller from './controller';

export const router = Router();

router.route('/login')
  .post(controller.login);

// router.route('/registration')
//   .post(controller.registration);