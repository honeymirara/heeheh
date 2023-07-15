import { Pool } from 'pg';

interface Message {
  id: number;
  fromUser: number;
  toUser: number;
  date: Date;
  text: string;
  file: Buffer;
}

const pool = new Pool();

const getAllMessages = async (): Promise<Message[]> => {
  const client = await pool.connect();
  const result = await client.query<Message>('SELECT * FROM messages');
  client.release();

  return result.rows;
};

const createMessage = async (message: Message): Promise<Message> => {
  const { fromUser, toUser, date, text, file } = message;
  const client = await pool.connect();
  const result = await client.query<Message>(
    'INSERT INTO messages (fromUser, toUser, date, text, file) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [fromUser, toUser, date, text, file]
  );
  client.release();

  return result.rows[0];
};

export { Message, getAllMessages, createMessage };