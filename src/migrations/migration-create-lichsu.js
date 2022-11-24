'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LichSus', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
    idKhachHang: {
        type: Sequelize.INTEGER
      },
    idPhiuXuat: {
        type: Sequelize.INTEGER
      },
    files: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('LichSus');
  }
};