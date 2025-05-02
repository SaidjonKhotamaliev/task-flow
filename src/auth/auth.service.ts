import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/libs/dtos/user';
import { T } from 'src/libs/types/common';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  public async hashPassword(memberPassword: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(memberPassword, salt);
  }
  //   public async comparePasswords(
  //     password: string,
  //     hashedPassword: string,
  //   ): Promise<boolean> {
  //     return await bcrypt.compare(password, hashedPassword);
  //   }
  public async createToken(user: User): Promise<string> {
    const payload: T = {};
    Object.keys(user['_doc'] ? user['_doc'] : user).map((ele) => {
      payload[`${ele}`] = user[`${ele}`];
    });
    delete payload.memberPassword;
    console.log('payload: ', payload);
    return await this.jwtService.signAsync(payload);
  }
  //   public async verifyToken(token: string): Promise<Member> {
  //     const member = await this.jwtService.verifyAsync(token);
  //     member._id = shapeIntoMongoObjectId(member._id);
  //     return member;
  //   }
}
