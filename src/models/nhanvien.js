"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // NhanVien.belongsTo(models.ChucVu, { foreginKey: "idCV", as: "data" });
      NhanVien.hasMany(models.CTPhieuNhap, { foreignKey: "id" });
    }
  }
  NhanVien.init(
    {
      TaiKhoan: DataTypes.STRING,
      MatKhau: DataTypes.STRING,
      Quyen: DataTypes.STRING,
      HoTen: DataTypes.STRING,
      Email: DataTypes.STRING,
      GioiTinh: DataTypes.STRING,
      NgaySinh: DataTypes.DATE,
      SoDT: DataTypes.STRING,
      DiaChi: DataTypes.STRING,
      idCV: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NhanVien",
    }
  );
  return NhanVien;
};
