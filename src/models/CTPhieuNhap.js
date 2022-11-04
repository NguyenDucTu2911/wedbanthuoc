'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CTPhieuNhap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CTPhieuNhap.init({
    MaThuoc: DataTypes.INTEGER,
    idNSX: DataTypes.INTEGER,
    SoLo: DataTypes.INTEGER,
    NgaySX: DataTypes.DATE,
    HanSD: DataTypes.DATE,
    SoLuongNhap: DataTypes.INTEGER,
    ThanhTien: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CTPhieuNhap',
  });
  return CTPhieuNhap;
};
