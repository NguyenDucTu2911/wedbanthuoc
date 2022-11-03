'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaiKhoanNhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaiKhoanNhanVien.init({
    TaiKhoan: DataTypes.STRING,
    MatKhau: DataTypes.STRING,
    Quyen: DataTypes.STRING,
    MaNV: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TaiKhoanNhanVien',
  });
  return TaiKhoanNhanVien;
};