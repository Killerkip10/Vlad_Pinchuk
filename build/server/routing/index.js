"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("./user");
const authorization_1 = require("./authorization");
const middlewares_1 = require("../middlewares");
exports.router = express_1.Router();
exports.router.get('/', (req, res, next) => res.redirect('index.html'));
exports.router.use('/', authorization_1.router);
exports.router.use(middlewares_1.checkToken);
exports.router.use('/', user_1.router);
//# sourceMappingURL=index.js.map