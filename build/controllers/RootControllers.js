"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Accsess is denied');
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h3> You are logged in! </h3>\n\t\t\t\t\t\t\t\t<a href=\"/auth/logout\">Logout</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t");
        }
        else {
            res.send("\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h3> You are not logged in!</h3>\n\t\t\t\t\t\t\t\t<a href=\"/auth/login\">Log in</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        if (req.session) {
            res.send("<div>\n\t\t\t\t\t\t\t\t<h3> \tWelcome to protected route , logged in user. You login is ".concat(req.session.email, " and ").concat(req.session.password, "</h3>\n\t\t\t\t\t\t\t\t<a href=\"/auth/logout\">Logout</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\n\t\t\t"));
        }
    };
    __decorate([
        (0, decorators_1.get)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)('/protected'),
        (0, decorators_1.use)(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, decorators_1.controller)('')
    ], RootController);
    return RootController;
}());
