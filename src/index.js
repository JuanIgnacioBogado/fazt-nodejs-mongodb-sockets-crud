import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import {createServer} from 'http';
import sockets from './sockets';

import connectDB from './db';
import './config';

connectDB();

const server = createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);

console.log('Server is running on port', 3000);

sockets(io);