"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      post: Sequelize.STRING,
      description: Sequelize.STRING,
      authorId: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
