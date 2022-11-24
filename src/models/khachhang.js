"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KhachHang.hasMany(models.PhieuXuat, { foreignKey: "id" });
    }
  }
  KhachHang.init(
    {
      HoTen: DataTypes.STRING,
      Email: DataTypes.STRING,
      GioiTinh: DataTypes.BOOLEAN,
      NgaySinh: DataTypes.DATE,
      SoDT: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "KhachHang",
    }
  );
  return KhachHang;
};
