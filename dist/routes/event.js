"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _event = _interopRequireDefault(require("../controllers/event"));

var _authorization = require("../middlewares/authorization");

var _files = require("../controllers/files");

var _validation = require("../middlewares/validation");

var eventRouter = new _express.Router();
eventRouter.post("/", [_authorization.auth, _authorization.adminAuth], _validation.eventValidation, (0, _asyncHandler["default"])(_event["default"].postEvent)).get("/signedUrl", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_files.getSignedUrl)).get("/", (0, _asyncHandler["default"])(_event["default"].getEvents)).get("/:id", (0, _asyncHandler["default"])(_event["default"].getEvent))["delete"]("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_event["default"].deleteEvent)).put("/:id", [_authorization.auth, _authorization.adminAuth], _validation.eventUpdateValidation, (0, _asyncHandler["default"])(_event["default"].updateEvent));
var _default = eventRouter;
exports["default"] = _default;
//# sourceMappingURL=event.js.map