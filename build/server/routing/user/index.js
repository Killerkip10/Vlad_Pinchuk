"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require("./controller");
exports.router = express_1.Router();
exports.router.route('/users')
    .get(controller.get);
exports.router.route('/users/:id')
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.remove);
exports.router.route('/users/add')
    .post(controller.add);
//# sourceMappingURL=index.js.map