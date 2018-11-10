import {Request, Response, NextFunction} from 'express';

import * as facade from './facade';

export function login(req: Request, res: Response, next: NextFunction) {
  facade.login(req.body.login, req.body.password)
    .then(result => {
      if (result) {
        res.cookie('token', result);
        res.status(200).send();
      }else {
        res.status(401).send();
      }
    })
    .catch(err => next(err));
}
export function forgotPassword(req: Request, res: Response, next: NextFunction) {
  const password = facade.forgotPassword(req.params.login);

  if (password) {
    res.status(200).json(password);
  } else {
    res.status(404).send();
  }
}

