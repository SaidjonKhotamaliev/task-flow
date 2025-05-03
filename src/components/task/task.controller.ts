import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Task, taskInput } from 'src/libs/dtos/task';
import { TaskService } from './task.service';
import { Request } from 'express';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  @UseGuards(AuthGuard)
  public async createTask(@Body() input: taskInput): Promise<Task> {
    console.log('POST, createTask');
    return await this.taskService.createTask(input);
  }

  // @Get('my-tasks')
  // @UseGuards(AuthGuard)
  // public async getMyTasks(@Req() req: Request): Promise<Task[]> {
  //   console.log('GET, getMyTasks');
  //   console.log(req.body);
  //   const userId = req.body.authMember._id;
  //   return await this.boardService.getMyTasks(userId);
  // }

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
