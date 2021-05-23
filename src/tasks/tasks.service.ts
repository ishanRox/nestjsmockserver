import { HttpException, Injectable } from '@nestjs/common';
import { AddTaskInput } from './dto/task.dto';
import { Task } from './models/task.model';
import { TASKS } from './task.mock';

@Injectable()
export class TasksService {
    //like our database
    tasks = TASKS;

    getTasks() {
        return this.tasks;
    }

    async addTask(input: AddTaskInput): Promise<Task[]> {
        const lastTask = this.tasks.slice(-1).pop();
        const task: Task = {
            id: lastTask.id + 1,
            title: input.title,
            description: input.description,
            completed: false,
        };

        this.tasks.push(task);
        return this.tasks;
    }


}
