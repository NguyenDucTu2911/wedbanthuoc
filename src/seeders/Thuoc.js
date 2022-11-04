'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Thuocs', [{
        TenThuoc: 'Thuốc Klavunamox 625mg Atabay điều trị các bệnh nhiễm khuẩn (3 vỉ x 5 viên)',
        DangBaoChe : 'Viên nén bao phim',
        TacDung : 'Thuốc Klavunamox 625 mg là sản phẩm của Công ty Atabay (Thổ Nhĩ Kỳ), với thành phần chính gồm Amoxicillin và Acid clavulanic. Thuốc có tác dụng trong điều trị nhiễm khuẩn nặng đường hô hấp trên, nhiễm khuẩn đường hô hấp dưới, nhiễm khuẩn nặng đường tiết niệu - sinh dục, nhiễm khuẩn da và mô mềm hay nhiễm khuẩn xương và khớp...',
        ThanhPhanChinh : 'Amoxicillin, Clavulanic acid',
        DoTuoi : 'Trên 12 tuổi',
        CanhBao : 'Phụ nữ có thai, Suy gan thận, Phụ nữ cho con bú',
        DonGia : 20.000,
        DVT : 'DVT',
        SoLuong : 100,
        QuyCach : 'Hộp 3 vỉ x 5 viên',
        ChiDinh : 'Viêm phế quản mạn tính, Nhiễm trùng tiết niệu, Viêm amidan, Viêm họng, Viêm tai giữa, Viêm xoang, Viêm phế quản cấp tính, Nhiễm trùng da và mô mềm',
        ThuocCanKeToa : 'Có (Thuốc chỉ dùng theo đơn của bác sĩ)',
        ChongChiDinh : 'Dị ứng thuốc, Suy gan',
        SoDangKy : 'VN-17312-13',
        MaNhomThuoc : 1,
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
