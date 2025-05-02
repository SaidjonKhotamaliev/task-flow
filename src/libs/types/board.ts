import { ObjectId } from 'mongoose';

export interface Board {
  _id: ObjectId;
  boardTitle: string;
  boardOwnerId: ObjectId;
  boardTasksIds: ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BoardInput {
  boardTitle: string;
  boardOwnerId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
