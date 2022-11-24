import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

let Taonhanvien = async (data)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let hashmatkhau = await maHoaMatKhau(data.MatKhau)
            await db.NhanVien.create({
                TaiKhoan: data.TaiKhoan,
                MatKhau: hashmatkhau,
                Quyen: data.Quyen,
                MaNV: data.MaNV
            })
            resolve("Tạo người dùng thành công");
        }catch(e){
            reject(e)
        }
    })
}

let getAllNhanVien = async (data) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let AllNhanVien = await db.NhanVien.findAll({
                raw: true,
            });
            resolve(AllNhanVien);
        }catch(e){
            reject(a)
        }
    })
}

let getInfoNhanVienid = async(NhanVienid)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let NhanVien = await db.NhanVien.findOne({
                raw: true,
                where: { id: NhanVienid}
            })
            if(NhanVien){
                resolve(NhanVien)
            }
            else{
                resolve({})
            }
        }catch(e){
            reject(e)
        }
    })
}

let UpDaTeNV = async (data)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let NhanVien = await db.NhanVien.findOne({
                where: { id: data.id}
            })
            if(NhanVien){
                NhanVien.TaiKhoan = data.TaiKhoan;
                NhanVien.Quyen = data.Quyen;
                NhanVien.MaNV = data.MaNV;

                await NhanVien.save();
                let allNhanvien = await db.NhanVien.findAll()
                resolve(allNhanvien);
            }
            else{
                resolve()
            }
        }catch(e){
            reject(e)
        }
    })
}

let deleteTeNV = async (data)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let Nhanvien = await db.NhanVien.findOne({
                where: { id: data}
            })
            if(Nhanvien){
                await Nhanvien.destroy()
            }
            let allNhanvien = await db.NhanVien.findAll()
            resolve(allNhanvien);
        }catch(e){
            reject(e);
        }        
    })
}

let maHoaMatKhau = (Password) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let hashPassword = await bcrypt.hashSync(Password, salt);
            resolve(hashPassword)
        }catch(e){
            reject(e);
        }
    })
}


module.exports = {
    Taonhanvien: Taonhanvien,
    getAllNhanVien: getAllNhanVien,
    getInfoNhanVienid: getInfoNhanVienid,
    UpDaTeNV: UpDaTeNV,
    deleteTeNV: deleteTeNV
} 


