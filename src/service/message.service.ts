import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/message.repository';
import { Message } from '../models/message.model'

@Injectable()
export class MessageService {
  constructor(private readonly messageRepository: MessageRepository) { }

  getAllMessages(): Promise<Message[]> {
    return this.messageRepository.getAllMessagesDB();
  }
  getMessageById(id: string): Promise<Message[]> {
    return this.messageRepository.getMessageByIdDB(id);
  }
  createMessage(fromUser: number, toUser: number, date: string, text: string): Promise<Message[]> {
    return this.messageRepository.createMessageDB(fromUser, toUser, date, text);
  }
  updateMessage(id: string, fromUser: number, toUser: number, date: string, text: string): Promise<Message[]> {
    return this.messageRepository.updateMessageDB(id, fromUser, toUser, date, text);
  }
  deleteMessage(id: string): Promise<Message[]> {
    return this.messageRepository.deleteMessageDB(id);
  }
  searchMessages(query: string) {
    return this.messageRepository.searchMessagesDB(query);
  }
}
