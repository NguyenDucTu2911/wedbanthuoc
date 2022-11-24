'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NhomThuocs', [{
      TenNhomThuoc: 'Thuốc Kháng Sinh',
      GhiChu: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Hệ Tim Mạch & Tạo Máu',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Dị Ứng & Hệ Miễn Dịch',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Thuốc Da Liễu',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Mắt',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        TenNhomThuoc: 'Hệ Cơ-Xương',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Vitamin & Khoáng Chất',
        GhiChu: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        TenNhomThuoc: 'Tai & Miệng / Họng',
        GhiChu: null,
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
