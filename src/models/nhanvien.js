'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NhanVien.init({
    HoTen: DataTypes.STRING,
    GioiTinh: DataTypes.BOOLEAN,
    NgaySinh: DataTypes.DATE,
    SoDT: DataTypes.STRING,
    Email: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    idCV: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NhanVien',
  });
  return NhanVien;
};