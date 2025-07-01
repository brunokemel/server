import { Server, Socket } from "socket.io";

export default function setupChatSocket(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log(`Usuário conectado: ${socket.id}`);

        socket.on("send_message", (message) => {
            io.emit("receive_message", message);
        });

        socket.on("disconnect", () => {
            console.log(`usuário desconectado: ${socket.id}`);
        });
    });
}