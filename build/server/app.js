"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const routing_1 = require("./routing");
exports.app = express();
exports.app.use(bodyParser.json());
exports.app.use(morgan('combined'));
exports.app.use(cors());
exports.app.use(express.static(__dirname + '/../../../fe/dist/fe'));
exports.app.use(routing_1.router);
exports.app.use((error, req, res, next) => {
    if (error.status !== 404) {
        console.log(error);
    }
    res.sendStatus(error.status || 500);
});
//# sourceMappingURL=app.js.map