import dotenv from 'dotenv';
import { Server } from './models/server';

dotenv.config({path: "vars.env"});


const server = new Server();

server.listen();












