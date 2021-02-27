"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _essays = _interopRequireDefault(require("./essays"));

var _image = _interopRequireDefault(require("./image"));

var _login = _interopRequireDefault(require("./login"));

var _message = _interopRequireDefault(require("./message"));

var _projects = _interopRequireDefault(require("./projects"));

var _event = _interopRequireDefault(require("./event"));

var _partners = _interopRequireDefault(require("./partners"));

var router = _express["default"].Router();

router.use("/essays", _essays["default"]);
router.use("/images", _image["default"]);
router.use("/", _login["default"]);
router.use("/messages", _message["default"]);
router.use("/projects", _projects["default"]);
router.use("/events", _event["default"]);
router.use("/partners", _partners["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map