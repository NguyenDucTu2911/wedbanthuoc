'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhanViens', {
      idNV: {
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
        type: Sequelize.STRING
      },
      DiaChi: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      idCV: {
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
    await queryInterface.dropTable('NhanViens');
  }
};