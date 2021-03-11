"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _messages = _interopRequireDefault(require("../controllers/messages"));

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _validation = require("../middlewares/validation");

var _authorization = require("../middlewares/authorization");

var messageRouter = new _express.Router();
messageRouter.post("/", _validation.messageValidation, (0, _asyncHandler["default"])(_messages["default"].sendMessage)).get("/", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_messages["default"].getMessages)).get("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_messages["default"].getMessage))["delete"]("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_messages["default"].deleteMessage));
var _default = messageRouter;
exports["default"] = _default;
//# sourceMappingURL=message.js.map