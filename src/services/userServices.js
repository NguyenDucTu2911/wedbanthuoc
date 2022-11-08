import { resolve } from 'promise'
import db from '../models/index'
import bcrypt from 'bcryptjs';

let handleUserLogin = (TaiKhoan, MatKhau)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let userData = {}
            let isExit = await checkUser(TaiKhoan)
            if(isExit){
                let user = await db.TaiKhoanNhanVien.findOne({
                    where: {TaiKhoan: TaiKhoan},
                    attributes: ['TaiKhoan','Quyen','MatKhau'],
                    raw: true
                })
                if(user){
                    let check = await bcrypt.compareSync(MatKhau, user.MatKhau);
                    if(check){
                        userData.errCode = 0;
                        userData.errMessage= 'Đang nhập thành công';
                        delete user.MatKhau
                        userData.user = user
                    }
                    else{
                        userData.errCode = 3;
                        userData.errMessage= 'sai mật khẩu'
                    }
                }else{
                    userData.errCode = 2;
                    userData.errMessage= 'sai tài khoản'
                }
                
            }
            else
            {
                userData.errCode = 1;
                userData.errMessage = `sai tài khoản`
                
            }
            resolve(userData)
        }catch(e){
            reject(e)
        }
    })
}
let checkUser = (TaiKhoan)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let TaiKhoanNV = await db.TaiKhoanNhanVien.findOne({
                where: {TaiKhoan: TaiKhoan }
            })
            if(TaiKhoanNV){
                resolve(true)
            }else{
                resolve(false)
            }

        }catch(e){
            reject(e)
        }
    }) 
}


let GetAllUser = (userId) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let user = '';
            if(userId=== 'ALL'){
                user = await db.TaiKhoanNhanVien.findAll({
                    
                    attributes:{
                        exclude:['MatKhau'] 
                    }
                });
            }
            if(userId && userId !== 'ALL'){
                user = await db.TaiKhoanNhanVien.findOne({
                   
                    where: { id: userId},
                    attributes:{
                        exclude:['MatKhau'] 
                    }
                })
            }
            resolve(user);
        }catch(e){
            reject(e)
        }
    })
}
module.exports={
    handleUserLogin:handleUserLogin,
    GetAllUser: GetAllUser
}