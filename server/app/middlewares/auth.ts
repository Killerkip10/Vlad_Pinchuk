import {Request, Response, NextFunction} from 'express';

import {verifyToken} from '../utils/jwt';

export function checkToken(req: Request, res: Response, next: NextFunction): void{
  verifyToken(req.cookies.token);
  
  next();
}