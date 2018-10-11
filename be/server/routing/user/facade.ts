const uuid = require('uuid/v4');

import {User} from '../../../models';
let users: User[] = require('../../../../datas/users.json');

export function get(): User[]{
  return users;
}
export function getById(id: string): User | undefined{
  return users.find(user=>user.id === id);
}
export function update(updateUser: User, id: string): void{
  const user = getById(id);

  if(!user){
    return;
  }

  const {
    name = user.name,
    password = user.password,
    dateOfBirth = user.dateOfBirth,
    dateOfNextNot = user.dateOfNextNot,
    information = user.information
  } = updateUser;

  console.log(dateOfNextNot);
  user.name = name;
  user.password = password;
  user.dateOfBirth = new Date(dateOfBirth).toISOString();
  user.dateOfNextNot = new Date(dateOfNextNot).toISOString();
  user.information = information;
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