"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config");
function createToken(obj) {
    return jsonwebtoken_1.sign(obj, config_1.config.jwt.secretKey, { algorithm: config_1.config.jwt.algorithm });
}
exports.createToken = createToken;
function verifyToken(token = '') {
    try {
        return jsonwebtoken_1.verify(token, config_1.config.jwt.secretKey, { algorithms: [config_1.config.jwt.algorithm] });
    }
    catch (err) {
        err.status = 401;
        throw err;
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map