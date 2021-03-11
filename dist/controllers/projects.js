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

var projectController = {
  postProject: async function postProject(req, res) {
    var _req$body = req.body,
        projectUrl = _req$body.projectUrl,
        projectThumbnail = _req$body.projectThumbnail,
        description = _req$body.description,
        title = _req$body.title;
    var project = await _models.Project.create({
      projectUrl: projectUrl,
      projectThumbnail: projectThumbnail,
      description: description,
      title: title
    });
    res.status(201).send({
      msg: "Project posted successfully",
      project: project
    });
  },
  getProjects: async function getProjects(req, res) {
    var projects = await _models.Project.findAll();
    res.status(200).send({
      projects: projects
    });
  },
  deleteProject: async function deleteProject(req, res) {
    var id = req.params.id;
    var deletedProject = await _models.Project.destroy({
      where: {
        id: id
      }
    });

    if (deletedProject) {
      return res.status(200).send({
        msg: "Project successfully deleted",
        deletedProject: deletedProject
      });
    }

    return res.status(404).send({
      msg: "Project with the specified ID doesn't exist"
    });
  },
  updateProject: async function updateProject(req, res) {
    var id = req.params.id;

    var _await$Project$update = await _models.Project.update(_objectSpread({}, req.body), {
      where: {
        id: id
      }
    }),
        _await$Project$update2 = (0, _slicedToArray2["default"])(_await$Project$update, 1),
        update = _await$Project$update2[0];

    if (update) {
      var updatedProject = await _models.Project.findOne({
        where: {
          id: id
        }
      });
      return res.status(200).send({
        msg: "Project successfully updated",
        updatedProject: updatedProject
      });
    }

    return res.status(404).send({
      msg: "Project with the specified ID doesn't exist"
    });
  }
};
var _default = projectController;
exports["default"] = _default;
//# sourceMappingURL=projects.js.map