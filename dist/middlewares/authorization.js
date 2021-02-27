"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminAuth = exports.auth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv").config();

var auth = function auth(req, res, next) {
  var token = req.header("auth-token");
  if (!token) return res.status(401).send({
    msg: "Access Denied, Login first"
  });

  try {
    var privateKey = process.env.JWT_SECRET;

    var validToken = _jsonwebtoken["default"].verify(token, privateKey);

    req.user = validToken;
    return next();
  } catch (error) {
    return res.status(401).send({
      msg: "Invalid token"
    });
  }
};

exports.auth = auth;

var adminAuth = function adminAuth(req, res, next) {
  var role = req.user.role;

  if (role !== "Admin") {
    return res.status(403).send({
      msg: "Access Denied, Available for admin only"
    });
  }

  return next();
};

exports.adminAuth = adminAuth;
//# sourceMappingURL=authorization.js.map