import { Server, Socket } from "socket.io";

export default function setupChatSocket(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log(`Usuário conectado: ${socket.id}`);

        socket.on("send_menssage", (message) => {
            io.emit("receive_message", message);
        });

        socket.on("disconect", () => {
            console.log(`usuário desconectado: ${socket.id}`);
        });
    });
}