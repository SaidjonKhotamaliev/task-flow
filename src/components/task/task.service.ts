import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, taskInput } from 'src/libs/dtos/task';

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
}
