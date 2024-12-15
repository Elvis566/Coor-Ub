import express from 'express';
import cors from 'cors';
import {sequelize } from './DB/conexion.js'
import bodyParser from 'body-parser';
import { routerCoordenadas } from './Router/CoordenadasRouter.js';


const app = express();
const PORT = process.env.PORT || 3000;


// configuracion de los cors y body-parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configuracion de rutas
app.use('/coor', routerCoordenadas);


const conexion = async ()=>{
    try {
        await  sequelize.authenticate();
        await sequelize.sync({ force: false});
        console.log("Run Server");
        app.listen(PORT, ()=>{
            console.log(`Server running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

conexion();