'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    static associate(models) {
      // define association here
    }
  }
  Content.init({
    contentHTML: DataTypes.TEXT('long'),
    MAK: DataTypes.TEXT('long'),
    thuocId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};