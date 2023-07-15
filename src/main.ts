/* import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createTables } from './Queries/сreateTable';
import * as cors from 'cors';
/* import * as socketIO from 'socket.io'; 
import { SocketAdapter } from './socket.adapter';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const server = app.getHttpServer();

  app.use(cors());


  const io = app.get(SocketAdapter).createIOServer(server);
  app.useWebSocketAdapter(io);
  await createTables();


  await app.listen(3000);
}

async function start() {
  await createTables();
  await bootstrap();
}

start();
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createTables } from './Queries/сreateTable';
import * as cors from 'cors';
/* import * as socketIO from 'socket.io'; */
import { SocketAdapter } from './socket.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = app.getHttpServer();

  app.use(cors());

  const io = app.get(SocketAdapter).createIOServer(server);
  app.useWebSocketAdapter(io);
 
  await app.listen(3000);
}

createTables();
bootstrap();
