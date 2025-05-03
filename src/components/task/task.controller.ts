import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Task, taskInput } from 'src/libs/dtos/task';
import { TaskService } from './task.service';
import { Request } from 'express';
import { ObjectId } from 'mongoose';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  @UseGuards(AuthGuard)
  public async createTask(@Body() input: taskInput): Promise<Task> {
    console.log('POST, createTask');
    return await this.taskService.createTask(input);
  }

  @Get('getMyTasks')
  @UseGuards(AuthGuard)
  public async getMyTasks(
    @Req() req: Request,
    @Query('boardId') boardId: string,
  ): Promise<Task[]> {
    if (!boardId) {
      throw new BadRequestException('boardId is required');
    }

    return await this.taskService.getMyTasks(boardId);
  }

  //   @Post('updateTask')
  //   @UseGuards(AuthGuard)
  //   public async updateBoard(
  //     @Body() input: boardUpdate,
  //     @Req() req: Request,
  //   ): Promise<Task> {
  //     console.log('POST, updateTask');
  //     // const userId = req.body.authMember._id;
  //     // input.boardOwnerId = userId;
  //     return await this.taskService.updateTask(input);
  //   }
}
