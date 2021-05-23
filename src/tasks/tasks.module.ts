import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MessageProducerService } from 'src/message-producer-service/message-producer-service.service';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [  BullModule.registerQueue({
    name:'message-queue'
  })
],
  providers: [TasksResolver, TasksService,MessageProducerService]
})
export class TasksModule {}
