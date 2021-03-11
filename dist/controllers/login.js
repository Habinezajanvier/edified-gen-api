"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = require("../../models");

var _tokenGen = _interopRequireDefault(require("../helpers/tokenGen"));

var _default = async function _default(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  var account = await _models.User.findOne({
    where: {
      email: email
    }
  });

  if (!account) {
    return res.status(401).send({
      message: "Email or password is incorrect"
    });
  }

  var validPass = await _bcrypt["default"].compare(password, account.password);

  if (!validPass) {
    return res.status(401).send({
      message: "Email or password is incorrect"
    });
  }

  var token = (0, _tokenGen["default"])({
    id: account.id,
    email: account.email,
    firstName: account.firstName,
    lastName: account.lastName,
    role: account.role
  });
  res.status(200).send({
    message: "Successfully loged in",
    token: token
  });
};

exports["default"] = _default;
//# sourceMappingURL=login.js.map