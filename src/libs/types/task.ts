import { ObjectId } from 'mongoose';
import { TaskStatus } from '../enums/task.enum';

export interface Task {
  _id: ObjectId;
  taskTitle: string;
  taskDesc: string;
  taskStatus: TaskStatus;
  dueDate: Date;
  boardId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskInput {
  taskTitle: string;
  taskDesc: string;
  taskStatus?: TaskStatus;
  dueDate: Date;
  boardId: ObjectId;
}
