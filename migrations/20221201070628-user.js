"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn("users", "id", {
    //   type: Sequelize.INTEGER,
    // });
    await queryInterface.removeColumn("users", "id");
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("users", "id");
  },
};
