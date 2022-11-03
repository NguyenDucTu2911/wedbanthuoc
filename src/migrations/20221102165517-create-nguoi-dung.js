'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NguoiDungs', {
      idKH: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      HoTen: {
        type: Sequelize.STRING
      },
      GioiTinh: {
        type: Sequelize.BOOLEAN
      },
      NgaySinh: {
        type: Sequelize.DATE
      },
      SoDT: {
        type: Sequelize.STRING(11)
      },
      email: {
        type: Sequelize.STRING
      },
      DiaChi: {
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
    await queryInterface.dropTable('NguoiDungs');
  }
};