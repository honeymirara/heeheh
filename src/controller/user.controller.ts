import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() data: any) {
    const { name, surname, email, pwd } = data;
    return await this.userService.createUser(name, surname, email, pwd);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: any) {
    const { name, surname, email, pwd } = data;
    return await this.userService.updateUser(id, name, surname, email, pwd);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
