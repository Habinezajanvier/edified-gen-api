'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    projectUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};