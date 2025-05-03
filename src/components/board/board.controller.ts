import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Board } from 'src/libs/dtos/board';
import { BoardService } from './board.service';
import { Request } from 'express';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('my-boards')
  @UseGuards(AuthGuard)
  public async getMyBoards(@Req() req: Request): Promise<Board[]> {
    console.log('GET, getMyBoards');
    return await this.boardService.getMyBoards();
  }
}
