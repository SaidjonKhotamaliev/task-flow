import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginInput, User, UserInput } from 'src/libs/dtos/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  public async signup(@Body() input: UserInput): Promise<User> {
    console.log('POST, signup');
    return await this.userService.signup(input);
  }

  @Post(`login`)
  public async login(@Body() input: LoginInput): Promise<User> {
    console.log('POST, login');
    return await this.userService.login(input);
  }
}
