import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Board, boardInput } from 'src/libs/dtos/board';
import { BoardService } from './board.service';
import { Request } from 'express';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('my-boards')
  @UseGuards(AuthGuard)
  public async getMyBoards(@Req() req: Request): Promise<Board[]> {
    console.log('GET, getMyBoards');
    console.log(req.body);
    const userId = req.body.authMember._id;
    return await this.boardService.getMyBoards(userId);
  }

  @Post('createBoard')
  @UseGuards(AuthGuard)
  public async createBoard(
    @Body() input: boardInput,
    @Req() req: Request,
  ): Promise<Board> {
    console.log('POST, createBoard');
    const userId = req.body.authMember._id;
    input.boardOwnerId = userId;
    return await this.boardService.createBoard(input);
  }
}
