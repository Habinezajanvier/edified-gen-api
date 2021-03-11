"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _models = _interopRequireDefault(require("../../models"));

var _email = _interopRequireDefault(require("../helpers/email"));

var Essay = _models["default"].Essay;
var _default = {
  recordEssay: async function recordEssay(req, res) {
    var _req$body = req.body,
        fullName = _req$body.fullName,
        email = _req$body.email,
        phone = _req$body.phone,
        birthDate = _req$body.birthDate,
        guardianName = _req$body.guardianName,
        guardianPhone = _req$body.guardianPhone,
        parentsId = _req$body.parentsId,
        district = _req$body.district,
        school = _req$body.school,
        year = _req$body.year,
        topic = _req$body.topic,
        essay = _req$body.essay;
    var emailExist = await Essay.findOne({
      where: {
        parentsId: parentsId
      }
    });

    if (emailExist) {
      return res.status(200).send({
        message: "Your essay was recorded before"
      });
    }

    var essayOption = {
      fullName: fullName,
      email: email,
      phone: phone,
      birthDate: birthDate,
      guardianName: guardianName,
      guardianPhone: guardianPhone,
      parentsId: parentsId,
      district: district,
      school: school,
      year: year,
      topic: topic,
      essay: essay
    };

    _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

    var msg = (0, _email["default"])({
      fullName: fullName,
      birthDate: birthDate,
      phone: phone,
      guardianName: guardianName,
      guardianPhone: guardianPhone,
      parentsId: parentsId,
      year: year,
      topic: topic,
      district: district,
      school: school,
      essay: essay
    });

    _mail["default"].send(msg).then(async function () {
      var createdEssay = await Essay.create(essayOption);
      res.status(201).send({
        message: "Essay submitted successfully",
        createdEssay: createdEssay
      });
    })["catch"](function (error) {
      res.status(500).send({
        err: error.message
      });
    });
  },
  getEssays: async function getEssays(req, res) {
    var essays = await Essay.findAll();
    res.status(200).send({
      essays: essays
    });
  },
  getSingleEssay: async function getSingleEssay(req, res) {
    var singleEssay = await Essay.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({
      singleEssay: singleEssay
    });
  },
  deleteEssay: async function deleteEssay(req, res) {
    var deletedEssay = await Essay.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({
      message: "Essay deleted successfully",
      deletedEssay: deletedEssay
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=essays.js.map