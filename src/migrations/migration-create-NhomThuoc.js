'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhomThuocs', {
    MaNhomThuoc: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      TenNhomThuoc: {
        type: Sequelize.STRING
      },
      GhiChu: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('NhomThuocs');
  }
};