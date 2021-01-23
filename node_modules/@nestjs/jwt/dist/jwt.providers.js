"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_constants_1 = require("./jwt.constants");
function createJwtProvider(options) {
    return [{ provide: jwt_constants_1.JWT_MODULE_OPTIONS, useValue: options || {} }];
}
exports.createJwtProvider = createJwtProvider;
