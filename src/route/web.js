import express from "express";
import homeControllor from "../controllers/homeControllor";
import userControllers from "../controllers/userControllers";
import medicineController from "../controllers/medicineController";


let router = express.Router();

const initWedRoute = (app)=>{
    router.get('/',homeControllor.getpage)
    router.post('/port', homeControllor.createNhanVien)
    router.get('/crud',homeControllor.getNhanVien)
    router.get('/edit-crud', homeControllor.geteditNhanVien)
    router.post('/update-crud', homeControllor.updateNhanVien)
    router.get('/delete-crud', homeControllor.deleteNhanVien)

    //api loggin
    router.post('/api/login', userControllers.handleLogin)

    //api crud Users
    router.get('/api/getUser', userControllers.handleGetAllUser)
    router.post('/api/postUser', userControllers.handleCreateUser)
    router.put('/api/putUser', userControllers.handleUpdateUser)
    router.delete('/api/deleteUser', userControllers.handledeleteUser)
    router.get('/api/getAllcode', userControllers.getAllCode)
    // crud medicine
    router.get('/api/getMedicine',medicineController.getAllMedicine)
    router.get('/api/getAllMedicine',medicineController.getMedicine)
    router.post('/api/postMedicine',medicineController.postMedicine)
    router.put('/api/UpdateMedicine',medicineController.putMedicine)
    router.delete('/api/deleteMedicine',medicineController.deleteMidicine)
    //add cart
    // router.post('/api/add-to-acrt',userControllers.handleaddCart)

    return app.use("/", router);
}

export default initWedRoute;