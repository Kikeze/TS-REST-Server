import { DataTypes } from 'sequelize';
import dataBase from '../db/db-connection';


const Usuario = dataBase.define("Usuario", {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;












