"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      title: DataTypes.STRING,
      caption: DataTypes.STRING,
      photoUrl: DataTypes.STRING
    },
    {}
  );
  Event.associate = function (models) {
    // associations can be defined here
  };
  return Event;
};
