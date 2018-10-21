"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facade = require("./facade");
function get(req, res, next) {
    res.status(200).send(facade.get());
}
exports.get = get;
function getById(req, res, next) {
    res.status(200).send(facade.getById(req.params.id));
}
exports.getById = getById;
function remove(req, res, next) {
    facade.remove(req.params.id);
    res.status(204).send();
}
exports.remove = remove;
function update(req, res, next) {
    res.status(200).send(facade.update(req.body, req.params.id));
}
exports.update = update;
function add(req, res, next) {
    res.status(201).send(facade.add(req.body));
}
exports.add = add;
//# sourceMappingURL=controller.js.map