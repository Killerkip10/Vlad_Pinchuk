import {Request, Response, NextFunction} from 'express';

import * as facade from './facade';

export function login(req: Request, res: Response, next: NextFunction){
  facade.login(req.body.login, req.body.password)
    .then(result => {
      if(result){
        res.status(200).send(result);
      }else{
        res.status(401).send();
      }
    })
    .catch(err => next(err));
}
export function registration(){

}