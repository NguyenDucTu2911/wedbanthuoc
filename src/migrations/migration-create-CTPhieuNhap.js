'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CTPhieuNhaps', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaThuoc: {
        type: Sequelize.INTEGER
      },
      idNSX: {
        type: Sequelize.INTEGER
      },
      SoLo: {
        type: Sequelize.STRING
      },
      NgaySX: {
        type: Sequelize.DATE
      },
      HanSD: {
        type: Sequelize.DATE
      },
      SoLuongNhap: {
        type: Sequelize.INTEGER
      },
      ThanhTien: {
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
    await queryInterface.dropTable('CTPhieuNhaps');
  }
};