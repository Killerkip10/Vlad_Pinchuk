"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../../utils/jwt");
let users = require('../../../../datas/users.json');
function login(login, password) {
    return new Promise((res, rej) => {
        const user = users.find(v => v.login === login && v.password === password);
        if (user) {
            res({ token: jwt_1.createToken({ id: user.id }) });
        }
        res(null);
    });
}
exports.login = login;
function registration() {
}
exports.registration = registration;
//# sourceMappingURL=facade.js.map