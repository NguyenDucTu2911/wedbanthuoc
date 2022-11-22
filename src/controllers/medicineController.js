import { JSON } from "sequelize";
import db from "../models/index";
import medicineServices from "../services/medicineServices";

let getAllMedicine = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required prameters",
      data: [],
    });
  }
  let data = await medicineServices.GetMedicine(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    data,
  });
};

let getMedicine = async (req, res) => {
  try {
    let data = await medicineServices.GetAllMedicine();
    return res.status(200).json({
      errCode: 0,
      errMessage: "ok",
      data,
    });
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "err",
    });
  }
};

let postMedicine = async (req, res) => {
  let message = await medicineServices.CreateMedicine(req.body);
  return res.status(200).json({ message });
};
let putMedicine = async (req, res) => {
  let message = await medicineServices.UpdateMedicine(req.body);
  return res.status(200).json({ message });
};

let deleteMidicine = async (req, res) => {
  let id = req.body.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Thuốc không tồn tại",
    });
  }
  let message = await medicineServices.DeleteMidicineServives(req.body.id);
  return res.status(200).json({ message });
};

let postSaveMc = async (req, res) => {
  try {
    let response = await medicineServices.SaveDetailMc(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Khong ket noi duoc server",
    });
  }
};

let getDetail = async (req, res) => {
  try {
    let data = await medicineServices.getDetailId(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "loi server",
    });
  }
};

// let getDetailCart = async (req, res) => {
//   console.log(req.query.id);
//   try {
//     let data = await medicineServices.getcartDetail(req.query.id);
//     return res.status(200).json(data);
//   } catch (e) {
//     console.log(error);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "loi server",
//     });
//   }
// };

// let getAllCart = async (req, res) => {
//   let id = req.query.id;
//   console.log(id);
//   if (!id) {
//     return res.status(200).json({
//       errCode: 1,
//       errMessage: "missing required prameters",
//       data: [],
//     });
//   }
//   let data = await medicineServices.GetallCart(id);
//   return res.status(200).json({
//     errCode: 0,
//     errMessage: "ok",
//     data,
//   });
// };

let portMuaHang = async (req, res) => {
  try {
    let data = await medicineServices.portMuaHangid(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "loi server",
    });
  }
};

module.exports = {
  getAllMedicine: getAllMedicine,
  postMedicine: postMedicine,
  putMedicine: putMedicine,
  deleteMidicine: deleteMidicine,
  getMedicine: getMedicine,
  postSaveMc: postSaveMc,
  getDetail: getDetail,
  // getDetailCart: getDetailCart,
  // getAllCart: getAllCart,
  portMuaHang: portMuaHang,
};
