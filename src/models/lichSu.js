'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LichSu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LichSu.init({
    idKhachHang: DataTypes.INTEGER,
    idPhiuXuat: DataTypes.INTEGER,
    files: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'LichSu',
  });
  return LichSu;
};
