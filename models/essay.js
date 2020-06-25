"use strict";
module.exports = (sequelize, DataTypes) => {
  const Essay = sequelize.define(
    "Essay",
    {
      fullName: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      guardianName: DataTypes.STRING,
      parentsId: DataTypes.STRING,
      guardianPhone: DataTypes.STRING,
      district: DataTypes.STRING,
      school: DataTypes.STRING,
      year: DataTypes.STRING,
      topic: DataTypes.STRING,
      essay: DataTypes.TEXT
    },
    {}
  );
  Essay.associate = function (models) {
    // associations can be defined here
  };
  return Essay;
};
