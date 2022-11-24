require("dotenv").config();
import nodemailer from "nodemailer";

let sendEmail = async (datasend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Bán Thuốc 👻" <ductu7890@gmail.com>',
    to: datasend.receiverEmail,
    subject: "Thông Tin Thuốc",
    html: `
    <h3>xin chào ${datasend.HoTen}</h3>
    <p>Đơn Hàng Của Bạn Đã Đặt Thành Công</p>
    <p>Đơn Hàng Của BẠN là: ${datasend.ThanhTien} VND</p>
    `,
  });
};

module.exports = {
  sendEmail: sendEmail,
};
