"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const app_1 = require("./server/app");
app_1.app.listen(config_1.config.port, () => {
    console.log(`Server has started on ${config_1.config.port} port`);
});
//# sourceMappingURL=index.js.map