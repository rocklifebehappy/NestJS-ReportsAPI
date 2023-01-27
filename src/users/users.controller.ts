import { Body, Controller, Post } from '@nestjs/common';

import { User } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Post()
  signUp(@Body() body: User) {
    return body;
  }
}
