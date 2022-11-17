import { JSON } from 'sequelize';
import db from '../models/index';
import medicineServices from '../services/medicineServices';

let getAllMedicine = async(req, res) =>{
    let id = req.query.id;

    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage:'missing required prameters',
            data: []
        })
    }
    let data = await medicineServices.GetMedicine(id)
    return res.status(200).json({
        errCode: 0,
        errMessage:'ok',
        data
    })
}

let postMedicine = async(req,res)=>{
    let message = await medicineServices.CreateMedicine(req.body);
    return res.status(200).json({message})
}
let putMedicine = async(req, res)=>{
    let message = await medicineServices.UpdateMedicine(req.body);
    return res.status(200).json({message})
}

let deleteMidicine = async(req, res)=>{
    let id = req.body.id;
    if(!id){
       return res.status(200).json({
            errCode: 1,
            errMessage: 'Thuốc không tồn tại'
       })
    }
    let message = await medicineServices.DeleteMidicineServives(req.body.id);
    return res.status(200).json({message})
}

module.exports={
    getAllMedicine: getAllMedicine,
    postMedicine: postMedicine,
    putMedicine: putMedicine,
    deleteMidicine:deleteMidicine
}