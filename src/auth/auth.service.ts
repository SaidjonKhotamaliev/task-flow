import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { T } from 'src/libs/types/common';

@Injectable()
export class AuthService {
  //   public async hashPassword(memberPassword: string): Promise<string> {
  //     const salt = await bcrypt.genSalt();
  //     return await bcrypt.hash(memberPassword, salt);
  //   }
  //   public async comparePasswords(
  //     password: string,
  //     hashedPassword: string,
  //   ): Promise<boolean> {
  //     return await bcrypt.compare(password, hashedPassword);
  //   }
  //   public async createToken(member: User): Promise<string> {
  //     const payload: T = {};
  //     Object.keys(member['_doc'] ? member['_doc'] : member).map((ele) => {
  //       payload[`${ele}`] = member[`${ele}`];
  //     });
  //     delete payload.memberPassword;
  //     console.log('payload: ', payload);
  //     return await this.jwtService.signAsync(payload);
  //   }
  //   public async verifyToken(token: string): Promise<Member> {
  //     const member = await this.jwtService.verifyAsync(token);
  //     member._id = shapeIntoMongoObjectId(member._id);
  //     return member;
  //   }
}
