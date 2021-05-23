import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileProducerService } from 'src/file-producer/file-producer.service';
import { MessageProducerService } from 'src/message-producer-service/message-producer-service.service';
import { AddTaskInput } from './dto/task.dto';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver('Tasks')
export class TasksResolver {
    constructor(
        private readonly taskService: TasksService,
        private readonly messageProducerService: MessageProducerService,
        private readonly fileProducerService:FileProducerService
    ) { }

    @Query(type => [Task])
    async getTasks() {
        this.messageProducerService.sendMessage('ishan');
        return this.taskService.getTasks();
    }



    @Mutation(type => [Task])
    async addTask(
        @Args('input') input: AddTaskInput,
    ) {
        this.fileProducerService.deleteFile("ishan ishan ishan");
        return this.taskService.addTask(input);
    }


}