import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Board, boardInput, boardUpdate } from 'src/libs/dtos/board';
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

  @Post('updateBoard')
  @UseGuards(AuthGuard)
  public async updateBoard(
    @Body() input: boardUpdate,
    @Req() req: Request,
  ): Promise<Board> {
    console.log('POST, updateBoard');
    const userId = req.body.authMember._id;
    input.boardOwnerId = userId;
    return await this.boardService.updateBoard(input);
  }

  @Delete('deleteBoard/:boardId')
  @UseGuards(AuthGuard)
  public async deleteBoard(
    @Param('boardId') boardId: string,
    @Req() req: Request,
  ): Promise<void> {
    console.log('DELETE, deleteBoard');
    const userId = req.body.authMember._id;
    await this.boardService.deleteBoard(userId, boardId);
  }
}
