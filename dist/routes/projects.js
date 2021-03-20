"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _projects = _interopRequireDefault(require("../controllers/projects"));

var _authorization = require("../middlewares/authorization");

var _files = require("../controllers/files");

var projectRouter = new _express.Router();
projectRouter.post("/", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_projects["default"].postProject)).get("/signedUrl", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_files.getSignedUrl)).get("/", (0, _asyncHandler["default"])(_projects["default"].getProjects))["delete"]("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_projects["default"].deleteProject)).put("/:id", [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_projects["default"].updateProject));
var _default = projectRouter;
exports["default"] = _default;
//# sourceMappingURL=projects.js.map