import {
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Types } from 'mongoose';
import { TaskStatus } from '../enums/task.enum';

export class taskInput {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  taskTitle: string;

  @IsString()
  @Length(10, 1000)
  taskDesc: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  taskStatus?: TaskStatus;

  @IsDate()
  dueDate: Date;

  @IsMongoId()
  boardId: Types.ObjectId;
}

export class Task {
  @IsString()
  taskTitle: string;

  @IsString()
  taskDesc: string;

  @IsEnum(TaskStatus)
  taskStatus: TaskStatus;

  @IsMongoId()
  boardId: Types.ObjectId[];

  @IsDate()
  dueDate: Date;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}
