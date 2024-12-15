import { sequelize } from "../DB/conexion.js";
import { DataTypes } from "sequelize";

export const CoordenadasModel = sequelize.define('coordenadas', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    longitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    altitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombreCoordenada: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})