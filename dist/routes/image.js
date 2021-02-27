"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _image = _interopRequireDefault(require("../controllers/image"));

var _authorization = require("../middlewares/authorization");

var imageRouter = new _express.Router();
imageRouter.post("/", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_image["default"].addImage)).get("/", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_image["default"].getImage))["delete"]("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_image["default"].deleteImage));
var _default = imageRouter;
exports["default"] = _default;
//# sourceMappingURL=image.js.map