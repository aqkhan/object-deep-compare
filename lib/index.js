"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const compare = (obj1, obj2) => {
    try {
        assert_1.default.deepStrictEqual(obj1, obj2);
        return true;
    }
    catch (err) {
        return false;
    }
};
module.exports = compare;
//# sourceMappingURL=index.js.map