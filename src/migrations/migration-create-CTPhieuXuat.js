'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CTPhieuXuats', {
    SoPX: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaThuoc: {
        type: Sequelize.INTEGER
      },
      SoLuongXuat: {
        type: Sequelize.INTEGER
      },
      ThanhTien: {
        type: Sequelize.STRING
      },
      ThanhToan: {
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
    await queryInterface.dropTable('CTPhieuXuats');
  }
};