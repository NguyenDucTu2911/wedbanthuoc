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

let handleGetAllUser = async(req, res) =>{
    let id = req.query.id;

    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage:'missing required prameters',
            users: []
        })
    }
    let users = await userServices.GetAllUser(id)
    return res.status(200).json({
        errCode: 0,
        errMessage:'ok',
        users
    })
}
 
let handleCreateUser = async(req, res) =>{
    let message = await userServices.CreateUser(req.body);
    return res.status(200).json({message})
}

let handleUpdateUser = async(req, res) =>{
    let message = await userServices.UpdateUser(req.body);
    return res.status(200).json({message})
}

let handledeleteUser = async (req, res) =>{
    let id = req.body.id;
    if(!id){
       return res.status(200).json({
            errCode: 1,
            errMessage: 'tài khoản không tồn tại'
       })
    }
    let message = await userServices.DeleteUser(req.body.id);
    return res.status(200).json({message})
}

module.exports = {
    handleLogin:handleLogin,
    handleGetAllUser: handleGetAllUser,
    handleCreateUser: handleCreateUser,
    handledeleteUser: handledeleteUser,
    handleUpdateUser: handleUpdateUser,

}