import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Task, taskInput, taskUpdate } from 'src/libs/dtos/task';
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

  @Post('updateTask')
  @UseGuards(AuthGuard)
  public async updateTask(@Body() input: taskUpdate): Promise<Task> {
    console.log('POST, updateTask');
    if (!input._id) {
      throw new BadRequestException('id is required');
    }
    return await this.taskService.updateTask(input);
  }

  @Delete('deleteTask/:taskId')
  @UseGuards(AuthGuard)
  public async deleteTask(@Param('taskId') boardId: string): Promise<void> {
    console.log('DELETE, deleteTask');
    await this.taskService.deleteTask(boardId);
  }
}
