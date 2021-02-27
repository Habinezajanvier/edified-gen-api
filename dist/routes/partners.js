"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asyncHandler = _interopRequireDefault(require("../middlewares/asyncHandler"));

var _authorization = require("../middlewares/authorization");

var _partners = _interopRequireDefault(require("../controllers/partners"));

var _validation = require("../middlewares/validation");

var _files = require("../controllers/files");

var partnerRoutes = new _express.Router();
partnerRoutes.post('/', [_authorization.auth, _authorization.adminAuth], _validation.partnerValidation, (0, _asyncHandler["default"])(_partners["default"].addPartner)).get('/signedUrl', [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_files.getSignedUrl)).get('/', (0, _asyncHandler["default"])(_partners["default"].getPartners)).get('/:id', (0, _asyncHandler["default"])(_partners["default"].getPartner)).put('/:id', [_authorization.auth, _authorization.adminAuth], _validation.updatePartnerValidation, (0, _asyncHandler["default"])(_partners["default"].updatePartner))["delete"]('/:id', [_authorization.auth, _authorization.adminAuth], (0, _asyncHandler["default"])(_partners["default"].deletePartner));
var _default = partnerRoutes;
exports["default"] = _default;
//# sourceMappingURL=partners.js.map