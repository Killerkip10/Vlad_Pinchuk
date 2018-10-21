"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require("./controller");
exports.router = express_1.Router();
exports.router.route('/login')
    .post(controller.login);
//# sourceMappingURL=index.js.map