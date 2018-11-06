import {sign, verify} from 'jsonwebtoken';

import {config} from '../../config';

interface TokenObj{
  id: string;
  role: string;
}

export function createToken(obj: object): string {
  return sign(obj, config.jwt.secretKey, {algorithm: config.jwt.algorithm});
}
export function verifyToken(token: string = ''): TokenObj {
  try {
    return verify(token, config.jwt.secretKey, {algorithms: [config.jwt.algorithm]}) as TokenObj;
  }catch (err) {
    err.status = 401;
    throw err;
  }
}
