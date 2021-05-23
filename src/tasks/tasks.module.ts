import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MessageProducerService } from 'src/message-producer-service/message-producer-service.service';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';
import { MessageConsumer } from 'src/message-producer-service/message.consumer';
import { FileProducerService } from 'src/file-producer/file-producer.service';
import { FileConsumer } from 'src/file-producer/file-consumer';

@Module({
  imports: [  BullModule.registerQueue({
    name:'message-queue'
  },
  {
    name: 'file-operation-queue',
  })
],
  providers: [TasksResolver, TasksService,MessageProducerService,MessageConsumer,FileProducerService,FileConsumer]
})
export class TasksModule {}
