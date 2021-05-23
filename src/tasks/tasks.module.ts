import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MessageProducerService } from 'src/message-producer-service/message-producer-service.service';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';
import { MessageConsumer } from 'src/message-producer-service/message.consumer';

@Module({
  imports: [  BullModule.registerQueue({
    name:'message-queue'
  })
],
  providers: [TasksResolver, TasksService,MessageProducerService,MessageConsumer]
})
export class TasksModule {}
