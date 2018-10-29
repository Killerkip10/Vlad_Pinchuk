import {Request, Response, NextFunction} from 'express';

import * as facade from './facade';

export function get(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.get());
}
export function getById(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.getById(req.params.id));
}
export function remove(req: Request, res: Response, next: NextFunction): void {
  facade.remove(req.params.id);
  res.status(204).send();
}
export function update(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.update(req.body, req.params.id));
}
export function add(req: Request, res: Response, next: NextFunction): void {
  res.status(201).send(facade.add(req.body));
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

