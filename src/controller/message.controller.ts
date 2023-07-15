import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MessageService } from '../service/message.service';
import { Message, getAllMessages, createMessage } from '../models/message.model';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Get()
  async getAllMessages() {
    return await this.messageService.getAllMessages();
  }

  @Get('/search/:query')
  async searchMessages(@Param('query') query: string): Promise<Message[]> {
    const results = await this.messageService.searchMessages(query);
    return results;
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string) {
    return await this.messageService.getMessageById(id);
  }

  @Post()
  async createMessage(@Body() data: any) {
    const { fromUser, toUser, date, text } = data;
    return await this.messageService.createMessage(fromUser, toUser, date, text);
  }

  @Put(':id')
  async updateMessage(@Param('id') id: string, @Body() data: any) {
    const { fromUser, toUser, date, text } = data;
    return await this.messageService.updateMessage(id, fromUser, toUser, date, text);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') id: string) {
    return await this.messageService.deleteMessage(id);
  }
}




