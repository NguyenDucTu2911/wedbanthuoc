'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhieuNhap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
    }
  }
  PhieuNhap.init({
    NgayNhap: DataTypes.DATE,
    GioNhap: DataTypes.DATE,
    idNPP: DataTypes.INTEGER,
    idNV: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PhieuNhap',
  });
  return PhieuNhap;
};
