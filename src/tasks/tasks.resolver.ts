import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddTaskInput, UpdateTaskInput } from './dto/task.dto';
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

    @Query(type => Task)
    async getTask(
        @Args('id') id: string,
    ) {
        return this.taskService.getTask(id);
    }

    @Mutation(type => [Task])
    async addTask(
        @Args('input') input: AddTaskInput,
    ) {
        return this.taskService.addTask(input);
    }

    @Mutation(type => Task)
    async updateTask(
        @Args('input') input: UpdateTaskInput,
    ) {
        return this.taskService.updateTask(input);
    }

    @Mutation(type => [Task])
    async deleteTask(
        @Args('id') id: string,
    ) {
        return this.taskService.deleteTask(id);
    }
}