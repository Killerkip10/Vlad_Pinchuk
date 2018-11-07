const uuid = require('uuid');

import {User} from '../../../../models';
let users: User[] = require('../../../../datas/users.json');

function getById(id: string): User | undefined {
  return users.find(v => v.id === id);
}
export function edit(updateUser: User, id: string): User | undefined {
  const user = getById(id);

  if (!user) {
    return user;
  }

  const {
    name = user.name,
    age = user.age,
    dateOfBirth = user.dateOfBirth,
    dateOfNextNot = user.dateOfNextNot,
    information = user.information
  } = updateUser;

  user.name = name;
  user.age = age;
  user.dateOfBirth = new Date(dateOfBirth).toISOString();
  user.dateOfNextNot = new Date(dateOfNextNot).toISOString();
  user.information = information;

  return user;
}
export function add(user: User): User {
  const newUser: User = {} as User;

  newUser.id = uuid();
  newUser.login = user.login;
  newUser.name = user.name;
  newUser.password = user.password;
  newUser.age = user.age;
  newUser.information = user.information;
  newUser.dateOfBirth = new Date(user.dateOfBirth).toISOString();
  newUser.dateOfNextNot = new Date(user.dateOfNextNot).toISOString();
  newUser.dateOfFirstLogin = new Date().toISOString();

  users.push(newUser);

  return newUser;
}
export function remove(id: string): void {
  // нужно менять именно в массиве
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      return;
    }
  }
}
