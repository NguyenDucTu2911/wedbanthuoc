'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhaSanXuat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NhaSanXuat.init({
    TenNSX: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    SoDT: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NhaSanXuat',
  });
  return NhaSanXuat;
};
