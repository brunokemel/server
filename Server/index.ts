import express from "express"
import { createServer } from "http";
import { Server } from "socket.io";
import setupChatSocket from "./chat/chat.gateway";

const httpServer = createServer();
// const app = express();

const io = new Server(httpServer, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    },
});

setupChatSocket(io);

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Servidor Socket.IO rodando na porta ${PORT}`);
})

            
// import authRoutes from './auth/auth.routes';
// app.use('/api/auth', authRoutes);


// OnRender ou Railway, o PORT é definido automaticamente