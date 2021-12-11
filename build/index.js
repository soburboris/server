"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRouter_1 = require("./routes/loginRouter");
var cookie_session_1 = __importDefault(require("cookie-session"));
var Approuter_1 = require("./Approuter");
require("./controllers/LoginController");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['test'] }));
app.use(loginRouter_1.router);
app.use(Approuter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
