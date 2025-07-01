"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupChatSocket;
function setupChatSocket(io) {
    io.on("connection", (socket) => {
        console.log(`Usuário conectado: ${socket.id}`);
        socket.on("send_message", (message) => {
            io.emit("receive_message", message);
        });
        socket.on("disconnect", () => {
            console.log(`usuário desconectado: ${socket.id}`);
        });
    });
}
