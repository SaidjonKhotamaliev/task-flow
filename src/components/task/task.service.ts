import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Task, taskInput, taskUpdate } from 'src/libs/dtos/task';
import { T } from 'src/libs/types/common';
import { shapeIntoMongoObjectId } from 'src/libs/types/config';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  public async createTask(input: taskInput): Promise<Task> {
    try {
      const result = await this.taskModel.create(input);
      return result;
    } catch (err) {
      console.log('Error on  createBoard', err);
      throw new BadRequestException(err.message);
    }
  }

  public async getMyTasks(boardId: string): Promise<Task[]> {
    try {
      boardId = shapeIntoMongoObjectId(boardId);
      const result: Task[] = await this.taskModel
        .find({ boardId: boardId })
        .exec();

      console.log('result: ', result);

      return result;
    } catch (err) {
      console.log('Error on  getMyTasks', err);
      throw new BadRequestException(err.message);
    }
  }

  public async updateTask(input: taskUpdate): Promise<Task> {
    try {
      const search: T = {
        _id: input._id,
      };

      const result = await this.taskModel.findOneAndUpdate(search, input, {
        new: true,
      });

      return result;
    } catch (err) {
      console.log('Error on  updateTask', err);
      throw new BadRequestException(err.message);
    }
  }

  public async deleteTask(taskId: string): Promise<void> {
    taskId = shapeIntoMongoObjectId(taskId);
    await this.taskModel.findOneAndDelete({
      _id: taskId,
    });
  }
}
