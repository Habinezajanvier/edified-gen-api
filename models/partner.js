"use strict";
module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    "Partner",
    {
      logo: DataTypes.STRING,
      name: DataTypes.STRING,
      partnerWeb: DataTypes.STRING
    },
    {}
  );
  Partner.associate = function (models) {
    // associations can be defined here
  };
  return Partner;
};
