import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { User, UserInput } from 'src/libs/dtos/user';
import { Message } from 'src/libs/types/common';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private authService: AuthService,
  ) {}

  public async signup(input: UserInput): Promise<User> {
    input.userPassword = await this.authService.hashPassword(
      input.userPassword,
    );
    try {
      const result = await this.userModel.create(input);
      result.accessToken = await this.authService.createToken(result);

      return result;
    } catch (err) {
      console.log('Error, Service model: ', err.message);
      throw new BadRequestException(Message.USED_NICK_PHONE);
    }
  }
}
