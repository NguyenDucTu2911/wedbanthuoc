'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhaPhanPhoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NhaPhanPhoi.hasMany(models.PhieuNhap, { foreignKey: "id" });
    }
  }
  NhaPhanPhoi.init({
    TenNPP: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    SoDT: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NhaPhanPhoi',
  });
  return NhaPhanPhoi;
};
