import {Router} from 'express';

import * as controller from './controller';

export const router = Router();

router.route('/admin/users')
  .put(controller.edit)
  .post(controller.add)
  .delete(controller.remove);
