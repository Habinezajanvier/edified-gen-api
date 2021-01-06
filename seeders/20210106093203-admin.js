"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          firstName: process.env.ADMIN_FIRST_NAME,
          lastName: process.env.ADMIN_LAST_NAME,
          email: process.env.ADMIN_EMAIL,
          role: process.env.ADMIN_ROLE,
          password: process.env.ADMIN_PASSWORD,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
