import { Injectable } from '@nestjs/common';
import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Message } from 'src/libs/types/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest(); // Get the HTTP request

    const bearerToken = request.headers.authorization;
    if (!bearerToken) {
      throw new BadRequestException(Message.TOKEN_NOT_EXIST);
    }

    const token = bearerToken.split(' ')[1]; // Extract the token part from "Bearer <token>"
    const authMember = await this.authService.verifyToken(token); // Verify the token
    if (!authMember) {
      throw new UnauthorizedException(Message.NOT_AUTHENTICATED);
    }

    console.log('userName[auth] =>', authMember.userName);
    request.body.authMember = authMember;

    return true;
  }
}
