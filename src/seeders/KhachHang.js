'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('KhachHangs', [{
      HoTen: 'nguyen duc tu',
      GioiTinh: 0,
      NgaySinh: '2000-11-29',
      SoDT: '0336234081',
      Email: 'example@example.com',
      DiaChi: 'viet nam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      HoTen: 'phan tien huy',
      GioiTinh: 1,
      NgaySinh: '2000-11-29',
      SoDT: '0336234081',
      Email: 'example@example.com',
      DiaChi: 'viet nam',
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
