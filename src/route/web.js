import express from "express";
import homeControllor from "../controllers/homeControllor";
import userControllers from "../controllers/userControllers";
import medicineController from "../controllers/medicineController";

let router = express.Router();

const initWedRoute = (app) => {
  router.get("/", homeControllor.getpage);
  router.post("/port", homeControllor.createNhanVien);
  router.get("/crud", homeControllor.getNhanVien);
  router.get("/edit-crud", homeControllor.geteditNhanVien);
  router.post("/update-crud", homeControllor.updateNhanVien);
  router.get("/delete-crud", homeControllor.deleteNhanVien);

  //api loggin
  router.post("/api/login", userControllers.handleLogin);

  //api crud Users
  router.get("/api/getUser", userControllers.handleGetAllUser);
  router.post("/api/postUser", userControllers.handleCreateUser);
  router.put("/api/putUser", userControllers.handleUpdateUser);
  router.delete("/api/deleteUser", userControllers.handledeleteUser);
  router.get("/api/getAllcode", userControllers.getAllCode);
  // crud medicine
  router.get("/api/getMedicine", medicineController.getAllMedicine);
  router.get("/api/getAllMedicine", medicineController.getMedicine);
  router.post("/api/postMedicine", medicineController.postMedicine);
  router.put("/api/UpdateMedicine", medicineController.putMedicine);
  router.delete("/api/deleteMedicine", medicineController.deleteMidicine);
  router.post("/api/SaveMedicine", medicineController.postSaveMc);
  router.get("/api/getDetailMedicine", medicineController.getDetail);
  //add cart
  router.post("/api/portMuaHang", medicineController.portMuaHang);
  //   router.get("/api/getDetailCart", medicineController.getDetailCart);
  //   router.get("/api/getAllCart", medicineController.getAllCart);
  //   router.post("/api/postCart", medicineController.postCart);

  // router.post('/api/add-to-acrt',userControllers.handleaddCart)
  //call tìm kiếm
  router.get("/api/get-list-giohang", medicineController.getlistgiohang);
  //call cthang-thuoc
  router.get("/api/get-cthang-thuoc", medicineController.cthangthuoc);

  //call all thuoc
  router.get("/api/GetAllthuocId", medicineController.GetAllthuocId);

  router.post("/api/portNhapHang", medicineController.portNhapHang);

  router.get("/api/GetAllKhachHang", medicineController.GetAllKhachHang);

  router.get("/api/GetAllctphiunhap", medicineController.GetAllctphiunhap);

  //vi vnpay

  router.post("/api/create_payment_url", function (req, res, next) {
    var ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    var config = require("config");
    var dateFormat = require("dateformat");

    var tmnCode = config.get("vnp_TmnCode");
    var secretKey = config.get("vnp_HashSecret");
    var vnpUrl = config.get("vnp_Url");
    var returnUrl = config.get("vnp_ReturnUrl");

    var date = new Date();

    var createDate = dateFormat(date, "yyyymmddHHmmss");
    var orderId = dateFormat(date, "HHmmss");
    var amount = req.body.amount;
    var bankCode = req.body.bankCode;

    var orderInfo = req.body.orderDescription;
    var orderType = req.body.orderType;
    var locale = req.body.language;
    if (locale === null || locale === "") {
      locale = "vn";
    }
    var currCode = "VND";
    var vnp_Params = {};
    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params["vnp_Locale"] = locale;
    vnp_Params["vnp_CurrCode"] = currCode;
    vnp_Params["vnp_TxnRef"] = orderId;
    vnp_Params["vnp_OrderInfo"] = orderInfo;
    vnp_Params["vnp_OrderType"] = orderType;
    vnp_Params["vnp_Amount"] = amount * 100;
    vnp_Params["vnp_ReturnUrl"] = returnUrl;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] = createDate;
    if (bankCode !== null && bankCode !== "") {
      vnp_Params["vnp_BankCode"] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    var querystring = require("qs");
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });

    res.redirect(vnpUrl);
  });

  router.get("/api/vnpay_ipn", function (req, res, next) {
    var vnp_Params = req.query;
    var secureHash = vnp_Params["vnp_SecureHash"];

    delete vnp_Params["vnp_SecureHash"];
    delete vnp_Params["vnp_SecureHashType"];

    vnp_Params = sortObject(vnp_Params);
    var config = require("config");
    var secretKey = config.get("vnp_HashSecret");
    var querystring = require("qs");
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");

    if (secureHash === signed) {
      var orderId = vnp_Params["vnp_TxnRef"];
      var rspCode = vnp_Params["vnp_ResponseCode"];
      //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
      res.status(200).json({ RspCode: "00", Message: "success" });
    } else {
      res.status(200).json({ RspCode: "97", Message: "Fail checksum" });
    }
  });

  router.get("/api/vnpay_return", function (req, res, next) {
    var vnp_Params = req.query;

    var secureHash = vnp_Params["vnp_SecureHash"];

    delete vnp_Params["vnp_SecureHash"];
    delete vnp_Params["vnp_SecureHashType"];

    vnp_Params = sortObject(vnp_Params);

    var config = require("config");
    var tmnCode = config.get("vnp_TmnCode");
    var secretKey = config.get("vnp_HashSecret");

    var querystring = require("qs");
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");

    if (secureHash === signed) {
      //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua

      res.render("success", { code: vnp_Params["vnp_ResponseCode"] });
    } else {
      res.render("success", { code: "97" });
    }
  });

  return app.use("/", router);
};

export default initWedRoute;
