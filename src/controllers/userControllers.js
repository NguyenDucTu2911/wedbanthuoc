import { JSON } from 'sequelize';
import db from '../models/index'
import userServices from '../services/userServices'

let handleLogin = async (req, res)=>{
    let username = req.body.TaiKhoan;
    let password = req.body.MatKhau;
    if(!username || !password){
        return res.status(500).json({
            errCode: 1,
            Message: 'vui long nhap day du thong tin'
        })
    }

    let userData = await userServices.handleUserLogin(username, password)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user: {}
    })
}

module.exports = {
    handleLogin:handleLogin

}