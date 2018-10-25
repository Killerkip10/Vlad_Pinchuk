import {User} from '../../../models';
import {createToken} from '../../utils/jwt';

const users: User[] = require('../../../datas/users.json');

export function login(login: string, password: string): Promise<string | null>{
  return new Promise((res, rej) => {
    const user = users.find(v => v.login === login && v.password === password);

    if(user){
      res(createToken({id: user.id}));
    }

    res(null);
  });
}
export function registration() {

}
export function forgotPassword(login: string): string | undefined {
  const user = users.find(v => v.login === login);

  if (user) {
    return user.password;
  }else {
    return undefined;
  }
}
