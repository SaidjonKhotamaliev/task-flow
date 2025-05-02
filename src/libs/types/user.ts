import { ObjectId } from 'mongoose';

export interface Member {
  _id: ObjectId;
  userName: string;
  userEmail: string;
  userPassword?: string;
  userBoardsIds: ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInput {
  userName: string;
  userEmail: string;
  userPassword: string;
  createdAt: Date;
  updatedAt: Date;
}
