import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Board } from 'src/libs/dtos/board';
import { shapeIntoMongoObjectId } from 'src/libs/types/config';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  public async getMyBoards(userId: ObjectId): Promise<Board[]> {
    userId = shapeIntoMongoObjectId(userId);
    const result = await this.boardModel.find({ boardOwnerId: userId }).exec();

    console.log('result: ', result);

    return result;
  }
}
