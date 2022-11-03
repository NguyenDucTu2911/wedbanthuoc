'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChucVu extends Model {
    static associate(models) {
      // define association here
    }
  }
  ChucVu.init({
    ChucVu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChucVu',
  });
  return ChucVu;
};