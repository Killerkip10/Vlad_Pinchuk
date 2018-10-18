import {User} from '../../../models';
import {createToken} from '../../utils/jwt';

let users: User[] = require('../../../../datas/users.json');

export function login(login: string, password: string): Promise<object | null>{
  return new Promise((res, rej) => {
    const user = users.find(v => v.login === login && v.password === password);

    if(user){
      res({token: createToken({id: user.id})});
    }

    res(null);
  });
}
export function registration(){

}