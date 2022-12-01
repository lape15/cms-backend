"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "createdAt", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("posts", "updatedAt", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("posts", "comments", {
      type: Sequelize.ARRAY(Sequelize.STRING),
    });
    await queryInterface.addColumn("posts", "likes", {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("posts", "createdAt");
    await queryInterface.removeColumn("posts", "updatedAt");
    await queryInterface.removeColumn("posts", "comments");
    await queryInterface.removeColumn("posts", "likes");
  },
};
