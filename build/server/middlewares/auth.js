"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../utils/jwt");
function checkToken(req, res, next) {
    jwt_1.verifyToken(req.header('token'));
    next();
}
exports.checkToken = checkToken;
//# sourceMappingURL=auth.js.map