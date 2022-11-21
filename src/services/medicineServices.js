import { reject, resolve } from 'promise'
import db from '../models/index'

let GetMedicine = (MedicineId) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let Medicine = '';
            if(MedicineId === 'ALL'){
                Medicine = await db.Thuoc.findAll({
                });
            }
            if(MedicineId && MedicineId !== 'ALL'){
                Medicine = await db.Thuoc.findOne({
                    where: { id: MedicineId},
                })
            }
            resolve(Medicine);
        }catch(e){
            reject(e)
        }
    })
}

let GetAllMedicine = ()=>{
    return new Promise(async(resolve, reject)=>{
        let Medicine = '';
        try{
            Medicine = await db.Thuoc.findAll({
            });
            resolve({
                errCode: 0,
                data: Medicine
            });
        }
        catch(e){
            reject(e)
        }
    })
}

let checkThuoc = (TenThuoc)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let TenThuocid = await db.Thuoc.findOne({
                where: {TenThuoc: TenThuoc},
            })
            if(TenThuocid){
                resolve(true)
            }else{
                resolve(false)
            }

        }catch(e){
            reject(e)
        }
    }) 
}

let CreateMedicine = (data) =>{
    console.log(data)
    return new Promise(async (resolve, reject)=>{
        try{     
                let check = await checkThuoc(data.TenThuoc)
                if(check === true){
                    resolve({
                        errCode: 1,
                        errMessage: 'Thuốc đã tại tại',
                    });
                }
                else{
                    await db.Thuoc.create({
                        TenThuoc: data.TenThuoc,
                        DangBaoChe : data.DangBaoChe,
                        TacDung : data.TacDung,
                        ThanhPhanChinh : data.ThanhPhanChinh,
                        DoTuoi : data.DoTuoi,
                        CanhBao : data.CanhBao,
                        DonGia : data.DonGia,
                        DVT : data.DVT,
                        SoLuong : data.SoLuong,
                        QuyCach : data.QuyCach,
                        ChiDinh : data.ChiDinh,
                        ThuocCanKeToa : data.ThuocCanKeToa,
                        ChongChiDinh : data.ChongChiDinh,
                        SoDangKy : data.SoDangKy,
                        Anh: data.Anh,
                        MaNhomThuoc : data.MaNhomThuoc,
                    })

                }
                resolve({
                    errCode: 0,
                    errMessage: 'Thêm Thuốc Thành Công',
                    data
                });
        }catch(e){
            reject(e)
        }
    })
}

let UpdateMedicine  = async (data) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            if(!data.id){
                resolve({
                    errCode: 2,
                    errMessage: 'không tìm thấy thuốc cần cập nhật'
                })
            }
            let Medicine = await db.Thuoc.findOne({
                where: { id: data.id},
                "raw": false,
            })
            if(Medicine){
                Medicine.TenThuoc = data.TenThuoc;
                Medicine.DangBaoChe= data.DangBaoChe;
                Medicine.TacDung = data.TacDung;
                Medicine.ThanhPhanChinh = data.ThanhPhanChinh;
                Medicine.DoTuoi= data.DoTuoi;
                Medicine.CanhBao= data.CanhBao;
                Medicine.DonGia= data.DonGia;
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
                    errMessage: 'cập nhật thuốc thành công'
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

let  DeleteMidicineServives = async (Medicineid)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            let Medicine = await db.Thuoc.findOne({
                where: { id: Medicineid},
                "raw": false,
            })
            if(!Medicine){
                resolve({
                    errCode: 1,
                    errMessage: 'Thuốc không tồn tại'
                })
            }
            await Medicine.destroy();
            resolve({ 
                errCode: 0,
                errMessage: 'xóa Thuốc thành công'
            });
        }catch(e){
            reject(e);
        }        
    }) 
}


let SaveDetailMc = (data) =>{
    console.log(data)
    return new Promise(async (resolve, reject)=>{
        try {
            if(!data.thuocId || !data.ContentsHTML || !data.MAK){
                resolve({
                    errCode: 1,
                    errMessage: 'messing Save'
                })
            }else{
                console.log('check',data)
                await db.Content.create({
                    ContentsHTML: data.ContentsHTML,
                    MAK: data.MAK,
                    thuocId: data.thuocId,
                })
                resolve({
                    errCode: 0,
                    errMessage: "Thanh Cong"
                })
            }
            
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailId = (id)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            if(!id){
                resolve({
                    errCode: 1,
                    errMessage: "không thấy "
                })
            }else{
                let data = await db.Thuoc.findOne({
                    where: { id: id},
                    include:[
                        {model: db.Content}
                    ],
                    raw : true ,
                    nest : true
                })
                if(data && data.Anh){
                    // let img = "";
                    data.Anh = Buffer( data.Anh ,'base64').toString('binary');
               }
                resolve({
                    errCode: 0,
                    errMessage: 'Thanh Cong',
                    data
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports={
    GetMedicine: GetMedicine,
    CreateMedicine:CreateMedicine,
    checkThuoc:checkThuoc,
    UpdateMedicine:UpdateMedicine,
    DeleteMidicineServives:DeleteMidicineServives,
    GetAllMedicine: GetAllMedicine,
    SaveDetailMc: SaveDetailMc,
    getDetailId: getDetailId
}