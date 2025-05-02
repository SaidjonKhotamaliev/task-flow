import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [UserModule, BoardModule, TaskModule]
})
export class ComponentsModule {}
