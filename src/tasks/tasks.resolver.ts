import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddTaskInput } from './dto/task.dto';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver('Tasks')
export class TasksResolver {
    constructor(
        private readonly taskService: TasksService
    ) { }

    @Query(type => [Task])
    async getTasks() {
        return this.taskService.getTasks();
    }

    

    @Mutation(type => [Task])
    async addTask(
        @Args('input') input: AddTaskInput,
    ) {
        return this.taskService.addTask(input);
    }

   
}