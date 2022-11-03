'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Thuocs', {
      MaThuoc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DangBaoChe: {
        type: Sequelize.STRING
      },
      TacDung: {
        type: Sequelize.STRING
      },
      ThanhPhanChinh: {
        type: Sequelize.TEXT
      },
      DoTuoi: {
        type: Sequelize.STRING
      },
      CanhBao: {
        type: Sequelize.STRING
      },
      DonGia: {
        type: Sequelize.STRING
      },
      DVT: {
        type: Sequelize.STRING
      },
      QuyCach: {
        type: Sequelize.STRING
      },
      ChiDinh: {
        type: Sequelize.TEXT
      },
      ThuocCanKeToa: {
        type: Sequelize.STRING
      },
      ChongChiDinh: {
        type: Sequelize.STRING
      },
      SoDangKy: {
        type: Sequelize.STRING
      },
      MaNhomThuoc: {
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
    await queryInterface.dropTable('Thuocs');
  }
};