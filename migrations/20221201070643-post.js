"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn("posts", "id", {
    //   type: Sequelize.INTEGER,
    // });
    await queryInterface.removeColumn("posts", "id");
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("posts", "id");
  },
};
