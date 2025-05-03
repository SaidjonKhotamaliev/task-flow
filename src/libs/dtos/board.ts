import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { ObjectId, Types } from 'mongoose';

export class boardInput {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  boardTitle: string;

  @IsMongoId()
  boardOwnerId: Types.ObjectId;
}

export class boardUpdate {
  @IsNotEmpty()
  @IsMongoId()
  _id: ObjectId;

  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  boardTitle: string;

  @IsMongoId()
  boardOwnerId: Types.ObjectId;
}

export class Board {
  @IsMongoId()
  _id: ObjectId;

  @IsString()
  boardTitle: string;

  @IsMongoId()
  boardOwnerId: Types.ObjectId;

  @IsMongoId({ each: true })
  boardTasksIds: Types.ObjectId[];

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}
