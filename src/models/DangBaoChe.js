'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DangBaoChe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DangBaoChe.init({
    DangBaoChe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DangBaoChe',
  });
  return DangBaoChe;
};
