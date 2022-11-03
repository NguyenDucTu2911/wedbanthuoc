'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PhieuXuats', {
    SoPX: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NgayXuat: {
        type: Sequelize.DATE
      },
      GioXuat: {
        type: Sequelize.DATE
      },
      idKH: {
        type: Sequelize.INTEGER
      },
      idNV: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('PhieuXuats');
  }
};