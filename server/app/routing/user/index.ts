import {Router} from 'express';

import * as controller from './controller';

export const router = Router();

router.route('/users')
  .get(controller.get);

router.route('/users/:id')
  .get(controller.getById)
  .put(controller.update)
  .delete(controller.remove);

router.route('/users/add')
  .post(controller.add);
