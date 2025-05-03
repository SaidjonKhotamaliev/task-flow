import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from 'src/libs/dtos/board';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  public async getMyBoards(): Promise<Board[]> {
    const result = await this.boardModel.find().exec();

    console.log('result: ', result);

    return result;
  }
}
