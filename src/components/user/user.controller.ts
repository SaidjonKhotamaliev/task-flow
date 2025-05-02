import { Body, Controller, Post } from '@nestjs/common';
import { User, UserInput } from 'src/libs/dtos/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  public async signup(@Body() input: UserInput): Promise<User> {
    console.log('POST, signup');
    return await this.userService.signup(input);
  }
}
