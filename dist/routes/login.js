"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _login = _interopRequireDefault(require("../controllers/login"));

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var loginRoute = new _express.Router();
loginRoute.post("/auth/login", (0, _asyncHandler["default"])(_login["default"]));
var _default = loginRoute;
exports["default"] = _default;
//# sourceMappingURL=login.js.map