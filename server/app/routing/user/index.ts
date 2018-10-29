import {Router} from 'express';

import * as controller from './controller';

export const router = Router();

router.route('/users/add')
  .post(controller.add);

router.route('/users/profile')
  .get(controller.getProfile)
  .put(controller.editProfile);

router.route('/users/find/:name')
  .get(controller.findUsers);

router.route('/users/check/:name')
  .get(controller.checkName);

router.route('/users/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.remove);

router.route('/users')
  .get(controller.get);
