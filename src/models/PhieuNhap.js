"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhieuNhap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PhieuNhap.belongsTo(models.NhanVien, { foreignKey: "idNV" });
      PhieuNhap.belongsTo(models.CTPhieuXuat, {
        foreignKey: "id",
      });
      PhieuNhap.belongsTo(models.NhaPhanPhoi, { foreignKey: "idNPP" });
    }
  }
  PhieuNhap.init(
    {
      NgayNhap: DataTypes.DATE,
      GioNhap: DataTypes.DATE,
      idNPP: DataTypes.INTEGER,
      idNV: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PhieuNhap",
    }
  );
  return PhieuNhap;
};
