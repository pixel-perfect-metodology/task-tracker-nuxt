import { v4 as uuid } from 'uuid';

const delay = (t: number) => new Promise((r) => setTimeout(r, t));

const Status = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_TEST: 'IN_TEST',
  READY_TO_RELEASE: 'READY_TO_RELEASE',
  DONE: 'DONE',
} as const;

type TaskStatus = keyof typeof Status;

type Task = {
  uuid: string;
  title: string;

  description?: string;
  attachments?: string[];

  status?: TaskStatus;

  createdAt: number;
  updatedAt: number;

  version?: number;
  previousVersionUuid?: string;
};

export const useTaskList = defineStore('taskList', {
  state: () => ({
    tasks: [] as Task[],

    filter: {
      status: '',
    },
  }),

  getters: {
    newTasks(state) {
      return state.tasks.filter((task) => task.status === Status.NEW);
    },
    inProgressTasks(state) {
      return state.tasks.filter((task) => task.status === Status.IN_PROGRESS);
    },
    inTestTasks(state) {
      return state.tasks.filter((task) => task.status === Status.IN_TEST);
    },
    readyToReleaseTasks(state) {
      return state.tasks.filter(
        (task) => task.status === Status.READY_TO_RELEASE
      );
    },
    doneTasks(state) {
      return state.tasks.filter((task) => task.status === Status.DONE);
    },

    unfinishedTasks(state) {
      return state.tasks.filter((task) => task.status !== Status.DONE);
    },

    filteredTasks(state): Task[] {
      const status = state.filter?.status as TaskStatus;

      if (status === Status.NEW) {
        return this.newTasks;
      } else if (status === Status.IN_PROGRESS) {
        return this.inProgressTasks;
      } else if (status === Status.IN_TEST) {
        return this.inTestTasks;
      } else if (status === Status.READY_TO_RELEASE) {
        return this.readyToReleaseTasks;
      } else if (status === Status.DONE) {
        return this.doneTasks;
      } else if (status !== Status.DONE) {
        return this.unfinishedTasks;
      }

      return this.tasks;
    },
  },

  actions: {
    add(title: string) {
      const timemarkNow = new Date().getTime();
      const newTask = {
        uuid: uuid(),
        title,
        createdAt: timemarkNow,
        updatedAt: timemarkNow,
      };
      this.tasks.push(newTask);
    },
    remove(uuid: string) {
      const index = this.tasks.findIndex((task) => task.uuid === uuid);
      this.tasks.splice(index, 1);
    },

    changeFilterParameterStatus(status: TaskStatus) {
      this.filter.status = status;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskList, import.meta.hot));
}
