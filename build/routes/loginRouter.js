"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Accsess is denied');
}
exports.router = (0, express_1.Router)();
exports.router.get('/login', function (req, res) {
    res.send("\n\t\t<form method=\"POST\">\n\t\t\t<div>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input name=\"email\" />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input name=\"password\" type=\"password\" />\n\t\t\t</div>\n\t\t\t<button>Submit</button>\n\t\t</form> \n    ");
});
exports.router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email == 'boris@gmail.com' && password == '1') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send("\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h3>Invalid email or password</h3>\n\t\t\t\t\t\t\t\t<a href=\"/login\">Log in</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t");
    }
});
exports.router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h3> You are logged in!</h3>\n\t\t\t\t\t\t\t\t<a href=\"/logout\">Logout</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t");
    }
    else {
        res.send("\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h3> You are not logged in!</h3>\n\t\t\t\t\t\t\t\t<a href=\"/login\">Log in</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t");
    }
});
exports.router.get('/logout', function (req, res) {
    req.session = { loggedIn: false };
    res.redirect('/');
});
exports.router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route , logged in user');
});
