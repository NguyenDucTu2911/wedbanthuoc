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
    // crud medicine
    router.get('/api/getMedicine',medicineController.getAllMedicine)
    // router.post('/api/postMedicine',medicineController.postMedicine)
    // router.put('/api/UpdateMedicine',medicineController.UpdateMedicine)
    // router.delete('/api/deleteMedicine',medicineController.deleteMidicine)

    return app.use("/", router);
}

export default initWedRoute;