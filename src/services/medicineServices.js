
let GetAllmedicine = (medicineId) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            let medicine = '';
            if(medicineId=== 'ALL'){
                medicine = await db.Thuoc.findAll({
                    
                    // attributes:{
                    //     exclude:['MatKhau'] 
                    // }
                });
            }
            if(medicineId && medicineId !== 'ALL'){
                medicine = await db.Thuoc.findOne({
                   
                    where: { id: medicineId},
                    // attributes:{
                    //     exclude:['MatKhau'] 
                    // }
                })
            }
            resolve(medicine);
        }catch(e){
            reject(e)
        }
    })
}

module.exports={
    GetAllmedicine: GetAllmedicine
}