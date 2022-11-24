'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NhaSanXuats', [{
        TenNSX: 'Thổ Nhĩ Kỳ',
        DiaChi: 'Naxçıvan Muxtar Respublikası',
        Email: 'tnk@gmail.com',
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
