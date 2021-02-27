"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../../models");

var _default = {
  addImage: async function addImage(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        photoUrl = _req$body.photoUrl;
    var image = await _models.Image.create({
      name: name,
      photoUrl: photoUrl
    });
    res.status(201).send({
      message: "Image saved successfully",
      image: image
    });
  },
  getImage: async function getImage(req, res) {
    var image = await _models.Image.findAll();
    res.status(200).send(image);
  },
  deleteImage: async function deleteImage(req, res) {
    var id = req.params.id;
    var deletedImage = await _models.Image.destroy({
      where: {
        id: id
      }
    });
    res.status(200).send({
      message: "Image successfully deleted",
      deletedImage: deletedImage
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=image.js.map