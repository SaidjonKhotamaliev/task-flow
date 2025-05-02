import {
  IsArray,
  IsDate,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Types } from 'mongoose';

export class UserInput {
  @IsNotEmpty()
  @Length(3, 12)
  @IsString()
  userName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  @MinLength(6)
  userPassword: string;
}

export class User {
  @IsString()
  userName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  userPassword: string;

  @IsArray()
  @IsMongoId({ each: true })
  userBoardsIds: Types.ObjectId[];

  @IsString()
  @IsOptional()
  accessToken?: string;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}

export class LoginInput {
  @IsNotEmpty()
  @Length(3, 12)
  @IsString()
  userName: string;

  @IsString()
  @MinLength(6)
  userPassword: string;
}
