"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.post = exports.del = exports.put = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetaDataKeys_1 = require("./MetaDataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.del);
exports.post = routeBinder(Methods_1.Methods.post);
exports.patch = routeBinder(Methods_1.Methods.patch);
