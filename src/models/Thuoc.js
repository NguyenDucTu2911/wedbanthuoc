'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thuoc extends Model {
    static associate(models) {
      // define association here
    }
  }
  Thuoc.init({
    DangBaoChe : DataTypes.STRING,
    TacDung : DataTypes.STRING,
    ThanhPhanChinh : DataTypes.TEXT,
    DoTuoi : DataTypes.STRING,
    CanhBao : DataTypes.STRING,
    DonGia : DataTypes.STRING,
    DVT : DataTypes.STRING,
    SoLuong : DataTypes.STRING,
    QuyCach : DataTypes.STRING,
    ChiDinh : DataTypes.STRING,
    ThuocCanKeToa : DataTypes.STRING,
    ChongChiDinh : DataTypes.STRING,
    SoDangKy : DataTypes.STRING,
    MaNhomThuoc : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Thuoc',
  });
  return Thuoc;
};