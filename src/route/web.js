import express from "express";
import homeControllor from "../controllers/homeControllor";

let router = express.Router();

const initWedRoute = (app)=>{
    // router.get('/users', homeControllor.getAllUser);
    router.get('/',(req,res)=>{
        return res.send("hello");
    })

    return app.use("/", router);
}

export default initWedRoute;  