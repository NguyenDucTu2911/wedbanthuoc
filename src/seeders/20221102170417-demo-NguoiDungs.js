'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NguoiDungs', [{
      email: 'example@example.com',
      HoTen: 'nguyen duc tu',
      GioiTinh: 0,
      NgaySinh: 2000-11-29,
      SoDT: '0336234081',
      DiaChi: 'viet nam',
      Quyen: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('NguoiDungs', null, {});
    }
  }
};
