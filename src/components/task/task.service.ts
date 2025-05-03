import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Task, taskInput } from 'src/libs/dtos/task';
import { shapeIntoMongoObjectId } from 'src/libs/types/config';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly boardModel: Model<Task>) {}

  public async createTask(input: taskInput): Promise<Task> {
    try {
      const result = await this.boardModel.create(input);
      return result;
    } catch (err) {
      console.log('Error on  createBoard', err);
      throw new BadRequestException(err.message);
    }
  }

  public async getMyTasks(boardId: string): Promise<Task[]> {
    try {
      boardId = shapeIntoMongoObjectId(boardId);
      const result: Task[] = await this.boardModel
        .find({ boardId: boardId })
        .exec();

      console.log('result: ', result);

      return result;
    } catch (err) {
      console.log('Error on  getMyTasks', err);
      throw new BadRequestException(err.message);
    }
  }
}
