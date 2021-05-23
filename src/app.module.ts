import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessageProducerService } from './message-producer-service/message-producer-service.service';
import { MessageConsumer } from './message-producer-service/message.consumer';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true, }), TasksModule, BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
],
  controllers: [],
  providers: [],
  
})
export class AppModule { }
