'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhanViens', {
      id: {
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
      HoTen: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      GioiTinh: {
        type: Sequelize.STRING
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
      idCV: {
        type: Sequelize.INTEGER
      },
      Quyen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NhanViens');
  }
};