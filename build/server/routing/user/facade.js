"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require('uuid/v4');
let users = require('../../../../datas/users.json');
function get() {
    return users;
}
exports.get = get;
function getById(id) {
    return users.find(user => user.id === id);
}
exports.getById = getById;
function update(updateUser, id) {
    const user = getById(id);
    if (!user) {
        return user;
    }
    const { name = user.name, password = user.password, dateOfBirth = user.dateOfBirth, dateOfNextNot = user.dateOfNextNot, information = user.information } = updateUser;
    user.name = name;
    user.password = password;
    user.dateOfBirth = new Date(dateOfBirth).toISOString();
    user.dateOfNextNot = new Date(dateOfNextNot).toISOString();
    user.information = information;
    return user;
}
exports.update = update;
function remove(id) {
    users = users.filter(user => user.id !== id);
}
exports.remove = remove;
function add(user) {
    const newUser = {};
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
exports.add = add;
//# sourceMappingURL=facade.js.map