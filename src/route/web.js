import express from "express";
import homeControllor from "../controllers/homeControllor";

let router = express.Router();

const initWedRoute = (app)=>{
    // router.get('/thuoc', homeControllor.getAllThuoc);
    // router.post('/create-thuoc', homeControllor.createThuoc);
    // router.put('/updateThuoc', homeControllor.updateThuoc);
    // router.delete('/deleteThuoc:MaThuoc', homeControllor.deleteThuoc);
    // router.get('/seachThuoc', homeControllor.seachThuoc);
    router.get('/',homeControllor.getpage)


    return app.use("/", router);
}

export default initWedRoute;