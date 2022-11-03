'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaiKhoanKhacHangs', {
      idTKKH: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TaiKhoan: {
        type: Sequelize.STRING
      },
      MatKhau: {
        type: Sequelize.STRING
      },
      idKH: {
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
    await queryInterface.dropTable('TaiKhoanKhacHangs');
  }
};