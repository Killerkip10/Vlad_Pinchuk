import {Request, Response, NextFunction} from 'express';

import * as facade from './facade';

export function get(req: Request, res: Response, next: NextFunction): void {
  setTimeout(() => res.status(200).send(facade.get()), 4 * 1000);
}
export function getById(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.getById(req.params.id));
}
export function getProfile(req: Request, res: Response, next: NextFunction): void {
  setTimeout(() => res.status(200).send(facade.getProfile(req.cookies.token)), 3 * 1000);
}
export function editProfile(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.editProfile(req.body, req.cookies.token));
}
export function checkName(req: Request, res: Response, next: NextFunction): void {
  const user = facade.checkName(req.params.name, req.cookies.token);

  if (user) {
    res.status(400).send();
  } else {
    res.status(200).send();
  }
}
export function checkLogin(req: Request, res: Response, next: NextFunction): void {
  const user = facade.checkLogin(req.params.login, req.cookies.token);

  if (user) {
    res.status(400).send();
  } else {
    res.status(200).send();
  }
}
export function findUsers(req: Request, res: Response, next: NextFunction): void {
  setTimeout(() => res.status(200).send(facade.findUsers(req.query.name)), 1000);
}

