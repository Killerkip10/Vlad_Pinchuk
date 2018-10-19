import {Request,Response,NextFunction} from 'express';

import * as facade from './facade';

export function get(req: Request, res: Response, next: NextFunction): void{
  res.status(200).send(facade.get());
}
export function getById(req: Request, res: Response, next: NextFunction): void{
  res.status(200).send(facade.getById(req.params.id));
}
export function remove(req: Request, res: Response, next: NextFunction): void{
  facade.remove(req.params.id);
  res.status(204).send();
}
export function update(req: Request, res: Response, next: NextFunction): void{
  res.status(200).send(facade.update(req.body, req.params.id));
}
export function add(req: Request, res: Response, next: NextFunction): void{
  res.status(201).send(facade.add(req.body));
}
