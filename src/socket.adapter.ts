
import { IoAdapter } from '@nestjs/platform-socket.io';
import { MessageController } from './controller/message.controller';
import { ServerOptions } from 'socket.io';

export class SocketAdapter extends IoAdapter {
    constructor(
        private readonly messageController: MessageController,) {
        super();
    }

    createIOServer(port: number, options?: ServerOptions): any {
        const server = super.createIOServer(port, options);

        server.on('connection', (socket) => {
            console.log('Новый пользователь подключился');

            socket.on('sendMessage', async (message) => {
                const result = await this.messageController.createMessage(message);
                server.emit('newMessage', result);
            });

            socket.on('disconnect', () => {
                console.log('пользователь отключился');
            });
        });

        return server;
    }
}

