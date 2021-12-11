"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var Approuter_1 = require("../../Approuter");
var MetaDataKeys_1 = require("./MetaDataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid Request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property ".concat(key));
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = Approuter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Path, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.MiddleWare, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.validator, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [validator, routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
