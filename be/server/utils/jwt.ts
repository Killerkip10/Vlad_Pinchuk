import {sign, verify} from 'jsonwebtoken';

import {config} from '../../config';

export function createToken(obj: object): string{
  return sign(obj, config.jwt.secretKey, {algorithm: config.jwt.algorithm});
}
export function verifyToken(token: string = ''){
  try {
    return verify(token, config.jwt.secretKey, {algorithms: [config.jwt.algorithm]});
  }catch (err){
    err.status = 401;
    throw err;
  }
}