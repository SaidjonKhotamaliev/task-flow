import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { LoginInput, User, UserInput } from 'src/libs/dtos/user';
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
      const accessToken = await this.authService.createToken(result);
      console.log('result', result);

      return {
        ...result.toObject(),
        accessToken,
      };
    } catch (err) {
      console.log('Error, Service model: ', err.message);
      throw new BadRequestException(Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<User> {
    const response = await this.userModel
      .findOne({ userName: input.userName })
      .select('+userPassword')
      .exec();

    const isMatch = await this.authService.comparePasswords(
      input.userPassword,
      response.userPassword,
    );
    if (!isMatch)
      throw new InternalServerErrorException(Message.WRONG_PASSWORD);

    const accessToken = await this.authService.createToken(response);

    return {
      ...response.toObject(),
      accessToken,
    };
  }
}
