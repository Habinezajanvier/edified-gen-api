"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var registerValidation = function registerValidation(req, res, next) {
  var schema = _joi["default"].object({
    fullName: _joi["default"].string().required(),
    guardianName: _joi["default"].string().required(),
    parentsId: _joi["default"].string().required(),
    email: _joi["default"].string().required().email(),
    birthDate: _joi["default"].date().required(),
    phone: _joi["default"].string().min(10).max(13).required(),
    guardianPhone: _joi["default"].string().min(10).max(13).required(),
    district: _joi["default"].string().required(),
    school: _joi["default"].string().required(),
    year: _joi["default"].string().required(),
    topic: _joi["default"].string().required(),
    essay: _joi["default"].string().required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

var _default = registerValidation;
exports["default"] = _default;
//# sourceMappingURL=validation.js.map