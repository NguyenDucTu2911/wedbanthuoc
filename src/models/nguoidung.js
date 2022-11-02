'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NguoiDung.init({
    email: DataTypes.STRING,
    HoTen: DataTypes.STRING,
    GioiTinh: DataTypes.BOOLEAN,
    NgaySinh: DataTypes.DATE,
    SoDT: DataTypes.STRING(11),
    DiaChi: DataTypes.STRING,
    Quyen: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NguoiDung',
  });
  return NguoiDung;
};