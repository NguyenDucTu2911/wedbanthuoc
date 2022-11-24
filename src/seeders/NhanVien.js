'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NhanViens', [{
      TaiKhoan: admin,
      MatKhau: DataTypes.STRING,
      Quyen: DataTypes.STRING,
      HoTen: 'nguyen duc tu',
      Email: 'example@example.com',
      idCV: 1,
      GioiTinh: 0,
      NgaySinh: '2000-11-29',
      SoDT: '0336234081',
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
