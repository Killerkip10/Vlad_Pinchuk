import {Router} from 'express';

import * as controller from './controller';

export const router = Router();

router.route('/users/profile')
  .get(controller.getProfile)
  .put(controller.editProfile);

router.route('/users/find/')
  .get(controller.findUsers);

router.route('/users/check-name/:name')
  .get(controller.checkName);

router.route('/users/check-login/:login')
  .get(controller.checkLogin);

router.route('/users/:id')
  .get(controller.getById);

router.route('/users')
  .get(controller.get);
