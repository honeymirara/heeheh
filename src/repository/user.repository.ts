import { Injectable } from '@nestjs/common';
import pool from '../db';

@Injectable()
export class UserRepository {
  async getAllUsersDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
  }

  async createUserDB(name: string, surname: string, email: string, pwd: string) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users (name, surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING*';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
  }

  async getUserByIdDB(id: string) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
  }

  async updateUserDB(id: string, name: string, surname: string, email: string, pwd: string) {
    const client = await pool.connect();
    const sql = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result;
  }

  async deleteUserDB(id: string) {
    const client = await pool.connect();
    const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const result = (await client.query(sql, [id])).rows;
    return result;
  }
}
