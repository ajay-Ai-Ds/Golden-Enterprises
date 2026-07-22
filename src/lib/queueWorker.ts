export interface QueueJob {
  id: string;
  service: string;
  area: string;
  city: string;
  status: "QUEUED" | "PROCESSING" | "VALIDATED" | "SAVED_DB" | "COMPLETED" | "FAILED";
  progress: number;
  createdAt: string;
}

export class BackgroundSeoQueue {
  private queue: QueueJob[] = [];
  private concurrency: number = 3;
  private isProcessing: boolean = false;

  addJob(service: string, area: string, city: string = "Chennai"): QueueJob {
    const job: QueueJob = {
      id: `job-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      service,
      area,
      city,
      status: "QUEUED",
      progress: 0,
      createdAt: new Date().toISOString(),
    };
    this.queue.push(job);
    return job;
  }

  getJobs(): QueueJob[] {
    return this.queue;
  }

  getCompletedCount(): number {
    return this.queue.filter((j) => j.status === "COMPLETED").length;
  }
}

export const globalSeoQueue = new BackgroundSeoQueue();
