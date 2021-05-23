import { OnGlobalQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import * as fs from 'fs';

@Processor('file-operation-queue')
export class FileConsumer {

    @Process('delete-file')
    async filedeletionJob(job: Job<unknown>) {
        console.log(job.data);
        const fakeAwaitJob = new Promise((resolve, reject) => { setTimeout(() => resolve("value completed"), 10000); });
        return fakeAwaitJob;

    }

    @OnGlobalQueueCompleted()
    async onGlobalCompleted(jobId: number, result: any) {

        console.log('(Global) on completed: job ', ' -> result: ', result);
    }
}