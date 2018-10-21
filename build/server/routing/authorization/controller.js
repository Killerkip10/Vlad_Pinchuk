"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facade = require("./facade");
function login(req, res, next) {
    facade.login(req.body.login, req.body.password)
        .then(result => {
        if (result) {
            res.status(200).send(result);
        }
        else {
            res.status(401).send();
        }
    })
        .catch(err => next(err));
}
exports.login = login;
function registration() {
}
exports.registration = registration;
//# sourceMappingURL=controller.js.map