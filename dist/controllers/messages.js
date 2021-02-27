"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../../models");

var _default = {
  sendMessage: async function sendMessage(req, res) {
    var _req$body = req.body,
        fullName = _req$body.fullName,
        email = _req$body.email,
        phoneNumber = _req$body.phoneNumber,
        message = _req$body.message;
    var newMessage = await _models.Message.create({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    });
    return res.status(201).send({
      message: "Message successfully sent",
      newMessage: newMessage
    });
  },
  getMessages: async function getMessages(req, res) {
    var messages = await _models.Message.findAll();

    if (messages.length === 0) {
      return res.status(404).send({
        message: "No message found"
      });
    }

    return res.status(200).send({
      messages: messages
    });
  },
  getMessage: async function getMessage(req, res) {
    var id = req.params.id;
    var message = await _models.Message.findByPk(id);
    if (!message) return res.status(404).send({
      message: "No message found"
    });
    return res.status(200).send({
      message: message
    });
  },
  deleteMessage: async function deleteMessage(req, res) {
    var id = req.params.id;
    var message = await _models.Message.findByPk(id);
    if (!message) return res.status(404).send({
      message: "No message found"
    });
    await _models.Message.destroy({
      where: {
        id: id
      }
    });
    return res.status(200).send({
      message: "Message successfully deleted"
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=messages.js.map