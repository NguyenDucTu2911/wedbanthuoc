"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhieuXuat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // PhieuXuat.hasMany(models.CTPhieuXuat, { foreginKey: "id " });
      PhieuXuat.belongsTo(models.KhachHang, { foreignKey: "idKH" });
      PhieuXuat.belongsTo(models.CTPhieuXuat, {
        foreignKey: "id",
      });
    }
  }
  PhieuXuat.init(
    {
      NgayXuat: DataTypes.DATE,
      GioXuat: DataTypes.DATE,
      idKH: DataTypes.INTEGER,
      idNV: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PhieuXuat",
    }
  );
  return PhieuXuat;
};
