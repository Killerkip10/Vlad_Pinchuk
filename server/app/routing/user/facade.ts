import {User} from '../../../models';
import {verifyToken} from '../../utils/jwt';
const users: User[] = require('../../../datas/users.json');

export function get(): User[] {
  return users;
}
export function getById(id: string): User | undefined {
  return users.find(v => v.id === id);
}
export function getProfile(token: string): User | undefined {
  const tokenObj = verifyToken(token);

  return users.find(v => v.id === tokenObj.id);
}
export function editProfile(updateUser: User, token: string): User | undefined {
  const tokenObj = verifyToken(token);

  return edit(updateUser, tokenObj.id);
}
export function checkName(name: string, token: string): User | undefined {
  const tokenObj = verifyToken(token);

  return users.find(v => v.name === name && v.id !== tokenObj.id);
}
export function checkLogin(login: string, token: string): User | undefined {
  const tokenObj = verifyToken(token);

  return users.find(v => v.login === login && v.id !== tokenObj.id);
}
export function findUsers(name: string): User[] {
  return name ? users.filter(v => v.name.toLowerCase().startsWith(name.toLowerCase())) : users;
}
function edit(updateUser: User, id: string): User | undefined {
  const user = getById(id);

  if (!user) {
    return user;
  }

  const {
    login = user.login,
    password = user.password,
    name = user.name,
    age = user.age,
    dateOfBirth = user.dateOfBirth,
    dateOfNextNot = user.dateOfNextNot,
    information = user.information
  } = updateUser;

  user.login = login;
  user.password = password;
  user.name = name;
  user.age = age;
  user.dateOfBirth = new Date(dateOfBirth).toISOString();
  user.dateOfNextNot = new Date(dateOfNextNot).toISOString();
  user.information = information;

  return user;
}
