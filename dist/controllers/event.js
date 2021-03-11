"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _models = require("../../models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  postEvent: async function postEvent(req, res) {
    var _req$body = req.body,
        title = _req$body.title,
        caption = _req$body.caption,
        photoUrl = _req$body.photoUrl;
    var event = await _models.Event.create({
      title: title,
      caption: caption,
      photoUrl: photoUrl
    });
    res.status(201).send({
      msg: "Event posted successfully",
      event: event
    });
  },
  getEvents: async function getEvents(req, res) {
    var event = await _models.Event.findAll();
    res.status(200).send({
      event: event
    });
  },
  getEvent: async function getEvent(req, res) {
    var id = req.params.id;
    var event = await _models.Event.findOne({
      where: {
        id: id
      }
    });
    res.status(200).send({
      event: event
    });
  },
  deleteEvent: async function deleteEvent(req, res) {
    var id = req.params.id;
    var deletedEvent = await _models.Event.destroy({
      where: {
        id: id
      }
    });

    if (deletedEvent) {
      return res.status(200).send({
        msg: "Event successfully deleted",
        deletedEvent: deletedEvent
      });
    }

    return res.status(404).send({
      msg: "Event with the specified ID doesn't exist"
    });
  },
  updateEvent: async function updateEvent(req, res) {
    var id = req.params.id;

    var _await$Event$update = await _models.Event.update(_objectSpread({}, req.body), {
      where: {
        id: id
      }
    }),
        _await$Event$update2 = (0, _slicedToArray2["default"])(_await$Event$update, 1),
        update = _await$Event$update2[0];

    if (update) {
      var updatedEvent = await _models.Event.findOne({
        where: {
          id: id
        }
      });
      return res.status(200).send({
        msg: "Caption successfully updated",
        updatedEvent: updatedEvent
      });
    }

    return res.status(404).send({
      msg: "Event with the specified ID doesn't exist"
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=event.js.map