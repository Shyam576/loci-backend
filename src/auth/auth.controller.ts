import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  createUser() {
    return 'This creates the user';
  }

  @Patch()
  updateUser() {
    return 'This tomrrow again';
  }

  @Get()
  getUser() {
    return 'This is the data returned';
  }
}
