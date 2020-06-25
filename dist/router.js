"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asyncHandler = _interopRequireDefault(require("./middlewares/asyncHandler"));

var _essays = _interopRequireDefault(require("./controllers/essays"));

var _validation = _interopRequireDefault(require("./middlewares/validation"));

var router = new _express.Router();
router.post("/essay", _validation["default"], (0, _asyncHandler["default"])(_essays["default"].recordEssay)).get("/essays", (0, _asyncHandler["default"])(_essays["default"].getEssays)).get("/essays/:id", (0, _asyncHandler["default"])(_essays["default"].getSingleEssay))["delete"]("/essays/:id", (0, _asyncHandler["default"])(_essays["default"].deleteEssay));
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.js.map