import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWedRoute from './route/web';
import connectDB from './config/ConnectDB';

require('dotenv').config()


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//setup view engine
configViewEngine(app);
//init wed route
initWedRoute(app);
connectDB();
app.listen(port, ()=>{
    console.log(`mở port thành công: http://localhost:${port}`)
})