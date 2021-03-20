"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePartnerValidation = exports.partnerValidation = exports.eventUpdateValidation = exports.eventValidation = exports.messageValidation = exports.essayValidation = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var essayValidation = function essayValidation(req, res, next) {
  var schema = _joi["default"].object({
    fullName: _joi["default"].string().required(),
    guardianName: _joi["default"].string().required(),
    parentsId: _joi["default"].string().required().min(16).max(16),
    email: _joi["default"].string().allow(""),
    birthDate: _joi["default"].date().required(),
    phone: _joi["default"].string().allow(""),
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

exports.essayValidation = essayValidation;

var messageValidation = function messageValidation(req, res, next) {
  var schema = _joi["default"].object({
    fullName: _joi["default"].string().required(),
    email: _joi["default"].string().required().email(),
    phoneNumber: _joi["default"].string().required(),
    message: _joi["default"].string().required().min(8)
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

exports.messageValidation = messageValidation;

var eventValidation = function eventValidation(req, res, next) {
  var schema = _joi["default"].object({
    title: _joi["default"].string().min(8).max(50).required(),
    caption: _joi["default"].string().min(8).required(),
    photoUrl: _joi["default"].string().required()
  });

  var _schema$validate3 = schema.validate(req.body),
      error = _schema$validate3.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

exports.eventValidation = eventValidation;

var eventUpdateValidation = function eventUpdateValidation(req, res, next) {
  var schema = _joi["default"].object({
    title: _joi["default"].string().min(8).max(50),
    caption: _joi["default"].string().min(8),
    photoUrl: _joi["default"].string()
  });

  var _schema$validate4 = schema.validate(req.body),
      error = _schema$validate4.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

exports.eventUpdateValidation = eventUpdateValidation;

var partnerValidation = function partnerValidation(req, res, next) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().required().messages({
      "string.base": "Name is required",
      "string.empty": "Name is cannot be empty",
      "any.required": "Name is required"
    }),
    logo: _joi["default"].string().uri().required().messages({
      "string.base": "Logo is required",
      "string.empty": "Logo cannot be empty",
      "any.required": "Logo is required"
    }),
    partnerWeb: _joi["default"].string().uri().required().messages({
      "string.base": "Web is required",
      "string.empty": "Web cannot be empty",
      "any.required": "Web is required"
    })
  });

  var _schema$validate5 = schema.validate(req.body),
      error = _schema$validate5.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

exports.partnerValidation = partnerValidation;

var updatePartnerValidation = function updatePartnerValidation(req, res, next) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(3).message({
      "string.min": "Name shouldn't be less than {#limit} characters"
    }),
    logo: _joi["default"].string(),
    projectWeb: _joi["default"].string()
  });

  var _schema$validate6 = schema.validate(req.body),
      error = _schema$validate6.error;

  if (error) return res.status(400).json({
    err: error.details[0].message
  });
  next();
};

exports.updatePartnerValidation = updatePartnerValidation;
//# sourceMappingURL=validation.js.map