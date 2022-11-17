import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWedRoute from './route/web';
import connectDB from './config/ConnectDB';
import cors from 'cors'

require('dotenv').config()


const app = express();
app.use(cors({origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
const port = process.env.PORT;

app.use(express.json());



app.use(express.urlencoded({
    extended: true
  }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//setup view engine
configViewEngine(app);
//init wed route
initWedRoute(app);
connectDB();
app.listen(port, ()=>{
    console.log(`mở port thành công: http://localhost:${port}`)
})