'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    static associate(models) {
      // define association here
    }
  }
  AllCode.init({
    keyMap: DataTypes.STRING,
    Type: DataTypes.STRING,
    Value_en: DataTypes.STRING,
    Value_vi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AllCode',
  });
  return AllCode;
};