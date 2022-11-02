'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NguoiDungs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
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
      DiaChi: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('NguoiDungs');
  }
};