'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NhaPhanPhois', [{
        TenNPP: 'CTY Dược Toàn Phát',
        DiaChi: '321 phạm văn đồng,Hồ Chí Minh',
        Email: 'tp@gmail.com',
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
