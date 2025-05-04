import {
  IsDate,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ObjectId, Types } from 'mongoose';
import { TaskPriority, TaskStatus } from '../enums/task.enum';

export class taskInput {
  @IsNotEmpty()
  @Length(2, 100)
  @IsString()
  taskTitle: string;

  @IsString()
  @Length(10, 1000)
  taskDesc: string;

  @IsEnum(TaskStatus)
  taskStatus?: TaskStatus;

  @IsEnum(TaskPriority)
  taskPriority: TaskPriority;

  @IsDate()
  taskDueDate: Date;

  @IsMongoId()
  boardId: Types.ObjectId;
}

export class taskUpdate {
  @IsNotEmpty()
  @IsMongoId()
  _id: string;

  @IsString()
  taskTitle?: string;

  @IsString()
  taskDesc?: string;

  @IsEnum(TaskStatus)
  taskStatus?: TaskStatus;

  @IsEnum(TaskPriority)
  taskPriority?: TaskPriority;

  @IsDate()
  taskDueDate?: Date;
}

export class Task {
  @IsString()
  taskTitle: string;

  @IsString()
  taskDesc: string;

  @IsEnum(TaskStatus)
  taskStatus: TaskStatus;

  @IsEnum(TaskPriority)
  taskPriority: TaskPriority;

  @IsMongoId()
  boardId: Types.ObjectId[];

  @IsDate()
  dueDate: Date;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;
}
