import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';

import { User } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  async signUp(@Body() body: User) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    const user = await this.userService.findOne(parseInt(id));

    return user;
  }

  @Get()
  async find(@Query() email: string) {
    const user = await this.userService.find(email);

    return user;
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() attrs: Partial<User>) {
    const user = this.userService.update(parseInt(id), attrs);

    return user;
  }

  @Delete('/:id')
  async remove(@Param() id: string) {
    return this.userService.remove(parseInt(id));
  }
}
