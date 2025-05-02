import {
  IsArray,
  IsDate,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
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

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}
