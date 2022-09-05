import express from 'express';
import cors from 'cors';

import { router as usuarioRouter } from '../routes/usuario';
import dataBase from '../db/db-connection';


export class Server {
    private app: express.Application;
    private port: String;
    private paths = {
        usuario: "/api/usuario"
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        try{
            await dataBase.authenticate();
            console.log("Base de datos conectada");
        }
        catch( error ) {
            throw error;
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.paths.usuario, usuarioRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
};



