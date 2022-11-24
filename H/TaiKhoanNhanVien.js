'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('TaiKhoanNhanViens', [{
        TaiKhoan: 'admin',
        MatKhau: 'admin',
        Quyen: 'admin',
        MaNV: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
