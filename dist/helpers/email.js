"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _template = _interopRequireDefault(require("./template"));

var _default = function _default(_ref) {
  var fullName = _ref.fullName,
      birthDate = _ref.birthDate,
      phone = _ref.phone,
      guardianName = _ref.guardianName,
      guardianPhone = _ref.guardianPhone,
      parentsId = _ref.parentsId,
      year = _ref.year,
      topic = _ref.topic,
      district = _ref.district,
      school = _ref.school,
      essay = _ref.essay;
  var body = (0, _template["default"])({
    fullName: fullName,
    birthDate: birthDate,
    phone: phone,
    guardianName: guardianName,
    guardianPhone: guardianPhone,
    parentsId: parentsId,
    district: district,
    school: school,
    year: year,
    topic: topic,
    essay: essay
  });
  var msg = {
    to: process.env.USER_EMAIL,
    from: process.env.ADMIN_EMAIL,
    subject: "Edified Generation Rwanda Application Submission",
    text: "Edified Generation Rwanda application",
    html: body
  };
  return msg;
};

exports["default"] = _default;
//# sourceMappingURL=email.js.map