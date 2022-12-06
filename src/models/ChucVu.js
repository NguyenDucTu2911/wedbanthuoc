"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChucVu extends Model {
    static associate(models) {
      // ChucVu.hasMany(models.NhanVien, { foreginKey: "id", as: "data" });
    }
  }
  ChucVu.init(
    {
      ChucVu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ChucVu",
    }
  );
  return ChucVu;
};
