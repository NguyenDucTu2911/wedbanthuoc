import { reject, resolve } from "promise";
import db from "../models/index";
import emailServices from "./emailServices";

let GetMedicine = (MedicineId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Medicine = "";
      if (MedicineId === "ALL") {
        Medicine = await db.Thuoc.findAll({});
      }
      if (MedicineId && MedicineId !== "ALL") {
        Medicine = await db.Thuoc.findOne({
          where: { id: MedicineId },
        });
      }
      resolve(Medicine);
    } catch (e) {
      reject(e);
    }
  });
};

let GetAllMedicine = () => {
  return new Promise(async (resolve, reject) => {
    let Medicine = "";
    try {
      Medicine = await db.Thuoc.findAll({});
      resolve({
        errCode: 0,
        data: Medicine,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let checkThuoc = (TenThuoc) => {
  return new Promise(async (resolve, reject) => {
    try {
      let TenThuocid = await db.Thuoc.findOne({
        where: { TenThuoc: TenThuoc },
      });
      if (TenThuocid) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let CreateMedicine = (data) => {
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkThuoc(data.TenThuoc);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Thuốc đã tại tại",
        });
      } else {
        await db.Thuoc.create({
          TenThuoc: data.TenThuoc,
          DangBaoChe: data.DangBaoChe,
          TacDung: data.TacDung,
          ThanhPhanChinh: data.ThanhPhanChinh,
          DoTuoi: data.DoTuoi,
          CanhBao: data.CanhBao,
          DonGia: data.DonGia,
          DVT: data.DVT,
          SoLuong: data.SoLuong,
          QuyCach: data.QuyCach,
          ChiDinh: data.ChiDinh,
          ThuocCanKeToa: data.ThuocCanKeToa,
          ChongChiDinh: data.ChongChiDinh,
          SoDangKy: data.SoDangKy,
          Anh: data.Anh,
          MaNhomThuoc: data.MaNhomThuoc,
        });
      }
      resolve({
        errCode: 0,
        errMessage: "Thêm Thuốc Thành Công",
        data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let UpdateMedicine = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "không tìm thấy thuốc cần cập nhật",
        });
      }
      let Medicine = await db.Thuoc.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (Medicine) {
        Medicine.TenThuoc = data.TenThuoc;
        Medicine.DangBaoChe = data.DangBaoChe;
        Medicine.TacDung = data.TacDung;
        Medicine.ThanhPhanChinh = data.ThanhPhanChinh;
        Medicine.DoTuoi = data.DoTuoi;
        Medicine.CanhBao = data.CanhBao;
        Medicine.DonGia = data.DonGia;
        Medicine.DVT = data.DVT;
        Medicine.SoLuong = data.SoLuong;
        Medicine.QuyCach = data.QuyCach;
        Medicine.ChiDinh = data.ChiDinh;
        Medicine.ThuocCanKeToa = data.ThuocCanKeToa;
        Medicine.ChongChiDinh = data.ChongChiDinh;
        Medicine.SoDangKy = data.SoDangKy;
        Medicine.Anh = data.Anh;
        Medicine.MaNhomThuoc = data.MaNhomThuoc;
        await Medicine.save();
        resolve({
          errCode: 0,
          errMessage: "cập nhật thuốc thành công",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "cập nhật thất bại",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let DeleteMidicineServives = async (Medicineid) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!Medicineid) {
        resolve({
          errCode: 1,
          errMessage: "Thuốc không tồn tại",
        });
      } else {
        if (Medicineid) {
          let Medicine = await db.Thuoc.findOne({
            where: { id: Medicineid },
            raw: false,
          });
          if (Medicine && Medicine.id) {
            let content = await db.Content.findOne({
              where: { thuocId: Medicine.id },
              raw: false,
            });
            await content.destroy();
          }
          await Medicine.destroy();
        }

        resolve({
          errCode: 0,
          errMessage: "xóa Thuốc thành công",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let SaveDetailMc = (data) => {
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.thuocId || !data.ContentsHTML || !data.MAK) {
        resolve({
          errCode: 1,
          errMessage: "messing Save",
        });
      } else {
        console.log("check", data);
        await db.Content.create({
          ContentsHTML: data.ContentsHTML,
          MAK: data.MAK,
          thuocId: data.thuocId,
        });
        resolve({
          errCode: 0,
          errMessage: "Thanh Cong",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "không thấy ",
        });
      } else {
        let data = await db.Thuoc.findOne({
          where: { id: id },
          include: [{ model: db.Content }],
          raw: true,
          nest: true,
        });
        if (data && data.Anh) {
          // let img = "";
          data.Anh = Buffer(data.Anh, "base64").toString("binary");
        }
        resolve({
          errCode: 0,
          errMessage: "Thanh Cong",
          data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

// let getcartDetail = (id) => {
//   console.log(id);
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (!id) {
//         resolve({
//           errCode: 1,
//           errMessage: "không thấy ID",
//         });
//       } else {
//         let data = await db.CTPhieuXuat.findOne({
//           where: { id: id },
//           include: [{ model: db.PhieuNhap }, { model: db.Thuoc }],
//           raw: true,
//           nest: true,
//         });
//         if (data && data.Anh) {
//           // let img = "";
//           data.Anh = Buffer(data.Anh, "base64").toString("binary");
//         }
//         resolve({
//           errCode: 0,
//           errMessage: "Thanh Cong",
//           data,
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// let GetallCart = (id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let Medicine = "";
//       if (id === "ALL") {
//         Medicine = await db.CTPhieuXuat.findAll({});
//       }
//       if (id && id !== "ALL") {
//         Medicine = await db.CTPhieuXuat.findOne({
//           where: { id: id },
//         });
//       }
//       resolve(Medicine);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

let portMuaHangid = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.Email || !data.HoTen || !data.DiaChi || !data.SoDT) {
        resolve({
          errCode: 1,
          errMessage: "lỗi không có Thông tin",
        });
      } else {
        await emailServices.sendEmail({
          receiverEmail: data.Email,
          HoTen: data.HoTen,
          ThanhTien: data.ThanhTien,
        });
        let CUTTOMMERT = await db.KhachHang.findOrCreate({
          where: { Email: data.Email },
          defaults: {
            Email: data.Email,
            HoTen: data.HoTen,
            DiaChi: data.DiaChi,
            SoDT: data.SoDT,
          },
        });
        if (CUTTOMMERT && CUTTOMMERT[0]) {
          let donhang = await db.PhieuXuat.findOrCreate({
            where: { idKH: CUTTOMMERT[0].id },
            default: {
              idKH: CUTTOMMERT[0].id,
              idNV: data.idNV,
              NgayXuat: data.NgayXuat,
              GioXuat: data.GioXuat,
            },
          });
          if (donhang && donhang[0].id) {
            // if (!donhang[0].id) {
            //   await db.CTPhieuXuat.findOrCreate({
            //     where: { id: donhang[0].id },
            //     default: {
            //       id: donhang[0].id,
            //       MaThuoc: data.MaThuoc,
            //       SoLuongXuat: data.SoLuongXuat,
            //       ThanhTien: data.ThanhTien,
            //       ThanhToan: data.ThanhToan,
            //     },
            //   });
            // } else {
            await db.CTPhieuXuat.create({
              id: donhang[0].id,
              MaThuoc: data.MaThuoc,
              SoLuongXuat: data.SoLuongXuat,
              ThanhTien: data.ThanhTien,
              ThanhToan: data.ThanhToan,
            });
            // }
          }
        }
        resolve({
          CUTTOMMERT,
          errCode: 0,
          errMessage: "them thành công",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getlistgiohangId = (NgayXuat) => {
  return new Promise(async (resolve, reject) => {
    try {
      // if (!id || !NgayXuat)
      if (!NgayXuat) {
        resolve({
          errCode: 1,
          errMessage: "lỗi required",
        });
      } else {
        let data = await db.PhieuXuat.findAll({
          //  where: { id: id, NgayXuat: NgayXuat }
          where: { NgayXuat: NgayXuat },
          include: [
            {
              model: db.CTPhieuXuat,
              // as: "data",
              // include: [{ model: db.Thuoc, as: "data" }],
            },
            { model: db.KhachHang },
          ],
          raw: true,
          nest: true,
        });
        //
        // { model: db.Thuoc },
        resolve({
          errCode: 0,
          errCode: "done",
          data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let cthangthuocId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "lỗi required",
        });
      } else {
        let data = await db.CTPhieuXuat.findAll({
          where: { id: id },
          include: [{ model: db.Thuoc }],
          raw: true,
          nest: true,
        });
        resolve({
          errCode: 0,
          errCode: "done",
          data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let GetAllthuocId = () => {
  return new Promise(async (resolve, reject) => {
    let data = "";
    try {
      data = await db.PhieuXuat.findAll({
        include: [
          {
            model: db.CTPhieuXuat,
          },
          { model: db.KhachHang },
        ],
        raw: true,
        nest: true,
      });
      resolve({
        errCode: 0,
        data: data,
      });
      // Medicine = await db.Thuoc.findAll({});
      // resolve({
      //   errCode: 0,
      //   data: Medicine,
      // });
    } catch (e) {
      reject(e);
    }
  });
};

let portNhapHangid = (data) => {
  console.log("helo", data);
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "lỗi không có Thông tin",
        });
      } else {
        let donhang = await db.PhieuNhap.findOrCreate({
          idNPP: data.idNPP,
          idNV: data.idNV,
          NgayXuat: data.NgayXuat,
          GioXuat: data.GioXuat,
        });
        if (donhang && donhang[0].id) {
          await db.CTPhieuNhap.create({
            id: donhang[0].id,
            SoLo: data.SoLo,
            NgaySX: data.NgaySX,
            HanSD: data.HanSD,
            SoLuongNhap: data.SoLuongNhap,
            ThanhTien: data.ThanhTien,
          });
        }
        resolve({
          CUTTOMMERT,
          errCode: 0,
          errMessage: "them thành công",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let GetKhachHang = (cutommerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Medicine = "";
      if (cutommerId === "ALL") {
        Medicine = await db.KhachHang.findAll({});
      }
      if (cutommerId && cutommerId !== "ALL") {
        Medicine = await db.KhachHang.findOne({
          where: { id: cutommerId },
        });
      }
      resolve(Medicine);
    } catch (e) {
      reject(e);
    }
  });
};

let Getctphiunhap = (MedicineId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Medicine = "";
      if (MedicineId === "ALL") {
        Medicine = await db.CTPhieuNhap.findAll({});
      }
      if (MedicineId && MedicineId !== "ALL") {
        Medicine = await db.CTPhieuNhap.findOne({
          where: { id: MedicineId },
        });
      }
      resolve(Medicine);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  GetMedicine: GetMedicine,
  CreateMedicine: CreateMedicine,
  checkThuoc: checkThuoc,
  UpdateMedicine: UpdateMedicine,
  DeleteMidicineServives: DeleteMidicineServives,
  GetAllMedicine: GetAllMedicine,
  SaveDetailMc: SaveDetailMc,
  getDetailId: getDetailId,
  //   getcartDetail: getcartDetail,
  //   GetallCart: GetallCart,
  portMuaHangid: portMuaHangid,
  getlistgiohangId: getlistgiohangId,
  cthangthuocId: cthangthuocId,
  GetAllthuocId: GetAllthuocId,
  portNhapHangid: portNhapHangid,
  GetKhachHang: GetKhachHang,
  Getctphiunhap: Getctphiunhap,
};
