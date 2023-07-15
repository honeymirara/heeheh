import { Controller, Post, Body } from '@nestjs/common';
import { ApiService } from '../service/api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('reg')
  async registrationUser(@Body() data: any) {
    const { name, surname, email, pwd } = data;
    return await this.apiService.registrationUser(name, surname, email, pwd);
  }

  @Post('auth')
  async authorizationUser(@Body() data: any) {
    const { email, pwd } = data;
    return await this.apiService.authorizationUser(email, pwd);
  }
}
