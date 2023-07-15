import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { MessageRepository } from './repository/message.repository';
import { MessageController } from './controller/message.controller';
import { MessageService } from './service/message.service';
import { ApiController } from './controller/api.controller';
import { ApiService } from './service/api.service';
import { ApiRepository } from './repository/api.repository';
import { SocketAdapter } from './socket.adapter';

@Module({
  imports: [],
  controllers: [UserController, MessageController, ApiController],
  providers: [UserService, UserRepository, MessageService, MessageRepository, ApiService, ApiRepository, SocketAdapter],
})
export class AppModule {}
