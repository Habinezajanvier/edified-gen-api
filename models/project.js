"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      projectUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      title: DataTypes.STRING,
      projectThumbnail: DataTypes.STRING
    },
    {}
  );
  Project.associate = function (models) {
    // associations can be defined here
  };
  return Project;
};
