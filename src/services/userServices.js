import { resolve } from 'promise'
import db from '../models/index'
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (TaiKhoan, MatKhau)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let userData = {}
            let isExit = await checkUser(TaiKhoan)
            if(isExit){
                let user = await db.NhanVien.findOne({
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
            let TaiKhoanNV = await db.NhanVien.findOne({
                where: {TaiKhoan: TaiKhoan},
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
                user = await db.NhanVien.findAll({
                    
                    attributes:{
                        exclude:['MatKhau'] 
                    }
                });
            }
            if(userId && userId !== 'ALL'){
                user = await db.NhanVien.findOne({
                   
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

let CreateUser = (data) =>{
    return new Promise(async (resolve, reject)=>{
        try{     
                let check = await checkUser(data.TaiKhoan)
                console.log(check)
                if(check === true){
                    resolve({
                        errCode: 1,
                        errMessage: 'Tài khoản đã tại tại',
                    });
                }
                else{
                    let hashmatkhau = await hashPasswords(data.MatKhau)
                    await db.NhanVien.create({
                    TaiKhoan: data.TaiKhoan,
                    MatKhau: hashmatkhau,
                    HoTen: data.HoTen,
                    Email: data.Email,
                    GioiTinh: data.GioiTinh,
                    NgaySinh: data.NgaySinh,
                    SoDT: data.SoDT,
                    DiaChi: data.DiaChi,
                    idCV: data.idCV,
                    Quyen: data.Quyen,})

                }
                resolve({
                    errCode: 0,
                    errMessage: 'TAO THANH CONG',
                    data
                });
        }catch(e){
            reject(e)
        }
    })
}

let UpdateUser  = async (data) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            if(!data.id){
                resolve({
                    errCode: 2,
                    errMessage: 'không tìm thấy tài khoản cần cập nhật'
                })
            }
            let User = await db.NhanVien.findOne({
                where: { id: data.id},
                "raw": false,
            })
            if(User){
                User.TaiKhoan = data.TaiKhoan;
                User.HoTen= data.HoTen;
                User.Email = data.Email;
                User.GioiTinh = data.GioiTinh;
                User.SoDT= data.SoDT;
                User.DiaChi= data.DiaChi;
                User.idCV= data.idCV;
                User.Quyen = data.Quyen;

                await User.save();
                // let allNhanvien = await db.TaiKhoanNhanVien.findAll()
                resolve({
                    errCode: 0,
                    errMessage: 'cập nhật người dùng thành công'
                });
            }
            else{
                resolve({
                    errCode: 1,
                    errMessage: 'cập nhật thất bại'
                })
            }
        }catch(e){
            reject(e)
        }
    })
}

let  DeleteUser = async (userid)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let user = await db.NhanVien.findOne({
                where: { id: userid},
                "raw": false,
            })
            if(!user){
                resolve({
                    errCode: 1,
                    errMessage: 'tài khoản không tồn tại'
                })
            }
            await user.destroy();
            resolve({ 
                errCode: 0,
                errMessage: 'xóa tài khoản thành công'
            });
        }catch(e){
            reject(e);
        }        
    }) 
}

let hashPasswords = (Password) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let hashPassword = await bcrypt.hash(Password, salt);
            resolve(hashPassword)
        }catch(e){
            reject(e);
        }
    })
}


module.exports={
    handleUserLogin:handleUserLogin,
    GetAllUser: GetAllUser,
    CreateUser: CreateUser,
    hashPasswords: hashPasswords,
    UpdateUser: UpdateUser,
    DeleteUser: DeleteUser
}