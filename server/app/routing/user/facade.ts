const uuid = require('uuid/v4');

import {User} from '../../../models';
let users: User[] = require('../../../datas/users.json');

export function get(): User[]{
  return users;
}
export function getById(id: string): User | undefined{
  return users.find(v => v.id === id);
}
export function update(updateUser: User, id: string): User | undefined{
  const user = getById(id);

  if(!user){
    return user;
  }

  const {
    name = user.name,
    age = user.age,
    password = user.password,
    dateOfBirth = user.dateOfBirth,
    dateOfNextNot = user.dateOfNextNot,
    information = user.information
  } = updateUser;

  user.name = name;
  user.age = age;
  user.password = password;
  user.dateOfBirth = new Date(dateOfBirth).toISOString();
  user.dateOfNextNot = new Date(dateOfNextNot).toISOString();
  user.information = information;

  return user;
}
export function remove(id: string): void{
  users = users.filter(user=>user.id !== id);
}
export function add(user: User): User{
  const newUser: User = <User>{};

  newUser.id = uuid();
  newUser.name = user.name;
  newUser.password = user.password;
  newUser.information = user.information;
  newUser.dateOfBirth = new Date(user.dateOfBirth).toISOString();
  newUser.dateOfNextNot = new Date(user.dateOfNextNot).toISOString();
  newUser.dateOfFirstLogin = new Date().toISOString();

  users.push(newUser);

  return newUser;
}
