import {Request, Response, NextFunction} from 'express';

import {verifyToken as verifyT} from '../utils/jwt';

export function checkToken(req: Request, res: Response, next: NextFunction): void{
  verifyT(req.header('token'));
  
  next();
}