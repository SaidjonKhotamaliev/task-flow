import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Board, boardInput } from 'src/libs/dtos/board';
import { Message } from 'src/libs/types/common';
import { shapeIntoMongoObjectId } from 'src/libs/types/config';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  public async getMyBoards(userId: ObjectId): Promise<Board[]> {
    try {
      userId = shapeIntoMongoObjectId(userId);
      const result = await this.boardModel
        .find({ boardOwnerId: userId })
        .exec();

      console.log('result: ', result);

      return result;
    } catch (err) {
      console.log('Error on  getMyBoards', err);
      throw new BadRequestException(err.message);
    }
  }

  public async createBoard(input: boardInput): Promise<Board> {
    try {
      const result = await this.boardModel.create(input);
      return result;
    } catch (err) {
      console.log('Error on  createBoard', err);
      throw new BadRequestException(err.message);
    }
  }
}
