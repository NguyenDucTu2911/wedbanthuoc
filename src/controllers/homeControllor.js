import { JSON } from 'sequelize';
import db from '../models/index'
import crud from '../services/crudservices'

let getpage =async(req, res) =>{
    try{
        return res.render('index.ejs');
    }catch(e){
        console.log(e)
    }
}

let createNhanVien = async (req, res)=>{
    let mess = await crud.Taonhanvien(req.body)
    console.log(mess)
    return res.send('trangchu.ejs')
}

let getNhanVien = async (req,res)=>{
    let data = await crud.getAllNhanVien()
    return res.render('trangchu.ejs',{
        data: data
    })
}

let geteditNhanVien = async (req, res) =>{
    let idnhanvien = req.query.id;
    if(idnhanvien){
        let DataNhanVien = await crud.getInfoNhanVienid(idnhanvien)
        return res.render('update.ejs',{
            DataNhanVien : DataNhanVien
        });
 
    }
    else{
        return res.send('không lấy được id')
    }
    
}

let updateNhanVien = async (req, res)=>{
    let datanv = req.body
    let data = await crud.UpDaTeNV(datanv)
    return res.render('trangchu.ejs',{
        data: data
    })
}
module.exports = {
    getpage:getpage,getNhanVien: getNhanVien,createNhanVien : createNhanVien, geteditNhanVien:geteditNhanVien, updateNhanVien:updateNhanVien
}