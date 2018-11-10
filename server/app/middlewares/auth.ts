import {Request, Response, NextFunction} from 'express';

import {verifyToken} from '../utils/jwt';

export function checkToken(req: Request, res: Response, next: NextFunction): void {
  verifyToken(req.cookies.token);
  next();
}
export function checkAdmin(req: Request, res: Response, next: NextFunction): void {
  if (verifyToken(req.cookies.token).role === '2') {
    next();
  } else {
    next({message: 'Not admin', status: 401});
  }
}
