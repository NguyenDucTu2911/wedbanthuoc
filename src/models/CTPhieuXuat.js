"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CTPhieuXuat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // CTPhieuXuat.hasOne(models.PhieuXuat, { foreginKey: "id " });
      // CTPhieuXuat.hasOne(models.Thuoc, { foreginKey: "MaThuoc " });
    }
  }
  CTPhieuXuat.init(
    {
      MaThuoc: DataTypes.INTEGER,
      SoLuongXuat: DataTypes.INTEGER,
      ThanhTien: DataTypes.STRING,
      ThanhToan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CTPhieuXuat",
    }
  );
  return CTPhieuXuat;
};
