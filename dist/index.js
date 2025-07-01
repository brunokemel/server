"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const chat_gateway_1 = __importDefault(require("./chat/chat.gateway"));
const httpServer = (0, http_1.createServer)();
// const app = express();
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});
(0, chat_gateway_1.default)(io);
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`Servidor Socket.IO rodando na porta ${PORT}`);
});
// import authRoutes from './auth/auth.routes';
// app.use('/api/auth', authRoutes);
// OnRender ou Railway, o PORT é definido automaticamente
