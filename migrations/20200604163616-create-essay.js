
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Essays", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING
      },
      guardianName: {
        type: Sequelize.STRING
      },
      parentsId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      guardianPhone: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      essay: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Essays");
  }
};
