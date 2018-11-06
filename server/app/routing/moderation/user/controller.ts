import {Request, Response, NextFunction} from 'express';

import * as facade from './facade';

export function edit(req: Request, res: Response, next: NextFunction): void {
  res.status(200).send(facade.edit(req.body, req.body.id));
}
export function add(req: Request, res: Response, next: NextFunction): void {
  res.status(201).send(facade.add(req.body));
}
export function remove(req: Request, res: Response, next: NextFunction): void {
  facade.remove(req.query.id);
  res.status(204).send();
}
