import { Injectable } from '@nestjs/common';
import { Message } from '../models/message.model'
import pool from '../db';

@Injectable()
export class MessageRepository {
  async getAllMessagesDB(): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM messages';
    const result = (await client.query(sql)).rows;
    return result;
  }

  async createMessageDB(fromUser: number, toUser: number, date: string, text: string): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'INSERT INTO messages (fromUser, toUser, date, text) VALUES ($1, $2, $3, $4) RETURNING*';
    const result = (await client.query(sql, [fromUser, toUser, date, text])).rows;
    return result;
  }

  async getMessageByIdDB(id: string): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM messages WHERE id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
  }

  async updateMessageDB(id: string, fromUser: number, toUser: number, date: string, text: string): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'UPDATE messages SET fromUser = $1, toUser = $2, date = $3, text = $4 WHERE id = $5 RETURNING *';
    const result = (await client.query(sql, [fromUser, toUser, date, text, id])).rows;
    return result;
  }

  async deleteMessageDB(id: string): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'DELETE FROM messages WHERE id = $1 RETURNING *';
    const result = (await client.query(sql, [id])).rows;
    return result;
  }

  async searchMessagesDB(query: string): Promise<Message[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM messages WHERE text LIKE $1';
    const result = (await client.query(sql, [`%${query}%`])).rows;
    return result
  }
}
