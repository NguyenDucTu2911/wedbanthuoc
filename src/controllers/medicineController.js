import { JSON } from 'sequelize';
import db from '../models/index';
import medicineServices from '../services/medicineServices';

let getAllMedicine = async(req, res) =>{
    let id = req.query.id;

    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage:'missing required prameters',
            medicine: []
        })
    }
    let medicine = await medicineServices.GetAllmedicine(id)
    return res.status(200).json({
        errCode: 0,
        errMessage:'ok',
        medicine
    })
}

module.exports={
    getAllMedicine: getAllMedicine
}