"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = function _default(payload) {
  var token = _jsonwebtoken["default"].sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d"
  });

  return token;
};

exports["default"] = _default;
//# sourceMappingURL=tokenGen.js.map