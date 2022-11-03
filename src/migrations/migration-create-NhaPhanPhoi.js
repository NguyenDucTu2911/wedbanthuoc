'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhaPhanPhois', {
    idNPP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TenNPP: {
        type: Sequelize.STRING
      },
      DiaChi: {
        type: Sequelize.STRING
      },
      SoDT: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      ThoiGianTao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ThoiCapNhat: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NhaPhanPhois');
  }
};