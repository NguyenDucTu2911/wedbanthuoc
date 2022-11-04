import db from '../models/index'

let getAllThuoc = async (req, res)=>{
    
}

let createThuoc = async(req, res) =>{
    
}

let updateThuoc = async(req, res) =>{
    
}

let deleteThuoc = async (req, res)=>{
    
}

let seachThuoc = async (req, res)=>{

}

let getpage =async(req, res) =>{
    try{
        let data = await db.AllCode.findAll();
        return res.render('index.ejs',{
            data: JSON.stringify(data)
        });
    }catch(e){
        console.log(e)
    }
   
}

module.exports = {
    getAllThuoc,createThuoc,updateThuoc,deleteThuoc,seachThuoc,getpage
}