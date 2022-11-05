import express from "express";
import homeControllor from "../controllers/homeControllor";

let router = express.Router();

const initWedRoute = (app)=>{
    router.get('/',homeControllor.getpage)
    router.post('/port', homeControllor.createNhanVien)
    router.get('/crud',homeControllor.getNhanVien)
    router.get('/edit-crud', homeControllor.geteditNhanVien)
    router.post('/update-crud', homeControllor.updateNhanVien)
    router.get('/delete-crud', homeControllor.deleteNhanVien)

    return app.use("/", router);
}

export default initWedRoute;