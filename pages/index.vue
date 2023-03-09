<template>
  <div>
    <!-- <h1>Tasks</h1> -->
    <!-- <h2>Tasks</h2> -->

    <p v-if="status" data-testid="task-list-filter-status">
      Filtered by status: <b>{{ status }}</b>
    </p>
    <p data-testid="task-list-counters">
      Tasks: filtered: {{ filteredTasks?.length || 0 }} / total:
      {{ tasks?.length || 0 }}
    </p>

    <button @click="add('new task title')" data-testid="add-task-button">
      Add task
    </button>

    <div>
      <div v-for="task in tasks">
        <!-- <div v-for="task in filteredTasks"> -->
        <div class="task">
          <div class="task-header">
            <div v-if="selectedTask !== task" @click="beginEditTaskTitle(task)">
              {{ task.title }}
            </div>
            <input
              v-if="selectedTask === task"
              type="text"
              v-model="selectedTaskTitle"
              @enter="endEditTaskTitle"
            />
            <div @click="openChangeStatusModal(task)">{{ task.status }}</div>
            <div>created at: {{ new Date(task.createdAt).toISOString() }}</div>
            <div>updated at: {{ new Date(task.updatedAt).toISOString() }}</div>

            <div>
              <div>version: {{ task.version }}</div>
              <!-- // todo add version scrolling -->
              <!-- <div>total versions: {{ task.versions?.length }}</div>
              <button>see previous</button>
              <button>see next</button>
              <button>see last</button> -->
            </div>

            <button @click="remove(task)" data-testid="remove-task-button">
              Delete task
            </button>
          </div>
          <div v-if="task.attachments?.length" class="task-attachments">
            <ul v-for="attachment in task.attachements">
              <ol class="attachment">
                <div v-if="attachment.type" class="attachment-type-icon">
                  {{ attachment.type }}
                </div>
                <a
                  class="attachment-url"
                  href="{{attachment.url}}"
                  target="_blank"
                >
                  {{ attachment.url }}
                </a>
                <button
                  @click="removeAttachment(task, attachment)"
                  title="remove attachment"
                  data-testid="remove-attachment-button"
                >
                  x
                </button>
              </ol>
            </ul>
          </div>
          <div class="task-description">
            {{ task.description }}
          </div>
        </div>
      </div>
    </div>

    <p>
      Complete store state via
      <code>taskListStore.$state</code>:
    </p>

    <pre>{{ taskListStore.$state }}</pre>
  </div>
</template>

<script setup lang="ts">
const taskListStore = useTaskList();
const {
  tasks,
  filteredTasks,
  filter: { status },
  add,
  remove,
} = taskListStore;

let selectedTask = undefined;

let selectedTaskTitle = '';

const beginEditTaskTitle = (task: string) => {
  selectedTask = task;
  selectedTaskTitle = task.title;
};

const endEditTaskTitle = () => {
  selectedTask = undefined;
  selectedTaskTitle = '';
};

const openChangeStatusModal = (task) => {
  // todo
};

// if (process.server) {
//   counter.n = 20
// }
</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
