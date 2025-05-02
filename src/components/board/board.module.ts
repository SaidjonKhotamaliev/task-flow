import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import BoardSchema from 'src/schemas/board.model';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from '../task/task.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: BoardSchema }])],
  providers: [BoardService],
  controllers: [BoardController],
  exports: [TaskService],
})
export class BoardModule {}
