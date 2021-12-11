"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var express_1 = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        return AppRouter.instance || (AppRouter.instance = (0, express_1.Router)());
        // 	if (!AppRouter.instance) {
        // 		AppRouter.instance = Router()
        // 	}
        // 	return AppRouter.instance
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
