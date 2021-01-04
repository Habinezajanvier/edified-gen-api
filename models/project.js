"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      projectUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING
    },
    {}
  );
  Project.associate = function (models) {
    // associations can be defined here
  };
  return Project;
};
