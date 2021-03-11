"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../../models");

var _default = {
  addPartner: async function addPartner(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        logo = _req$body.logo;
    var addedPartner = await _models.Partner.create({
      name: name,
      logo: logo
    });
    return res.status(201).json({
      msg: 'Partner added successfully',
      addedPartner: addedPartner
    });
  },
  getPartners: async function getPartners(req, res) {
    var savedPartners = await _models.Partner.findAll();
    if (savedPartners.length === 0) return res.status(400).json({
      msg: 'There are no Partners yet'
    });
    return res.status(200).json({
      savedPartners: savedPartners
    });
  },
  getPartner: async function getPartner(req, res) {
    var id = req.params.id;
    var singlePartner = await _models.Partner.findOne({
      where: {
        id: id
      }
    });
    if (!singlePartner) return res.status(400).json({
      msg: 'No partner found'
    });
    return res.status(200).json({
      singlePartner: singlePartner
    });
  },
  updatePartner: async function updatePartner(req, res) {
    var id = req.params.id;
    var partnerToUpdate = await _models.Partner.findOne({
      where: {
        id: id
      }
    });
    if (!partnerToUpdate) return res.status(404).json({
      msg: 'No partner found'
    });
    var updatedPartner = await partnerToUpdate.update(req.body);
    return res.status(200).json({
      msg: 'Partner updated successfully',
      updatedPartner: updatedPartner
    });
  },
  deletePartner: async function deletePartner(req, res) {
    var id = req.params.id;
    var partnerToDelete = await _models.Partner.findOne({
      where: {
        id: id
      }
    });
    if (!partnerToDelete) return res.status(404).json({
      msg: 'No partner found'
    });
    await partnerToDelete.destroy();
    var deletedPartner = partnerToDelete;
    return res.status(200).json({
      msg: 'Partner deleted successfully',
      deletedPartner: deletedPartner
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=partners.js.map