<template>
  <div>
    <h1>Tasks</h1>
    <h2>Tasks</h2>

    <p data-testid="task-list-filter-status">status: {{ status }}</p>
    <p data-testid="task-list-counters">
      filtered: {{ filteredTasks?.length }} / all: {{ taskList?.length }}
    </p>

    <button
      @click="taskList.add('new task title')"
      data-testid="add-task-button"
    >
      Add task
    </button>
    <button @click="counter.remove('uuid')" data-testid="remove-task-button">
      delete task
    </button>

    <p>
      Complete store state via
      <code>store.$state</code>:
    </p>

    <pre>{{ taskList.$state }}</pre>
  </div>
</template>

<script setup lang="ts">
// const taskListStore = useTaskList();
const {
  taskList,
  filteredTasks,
  filter: { status },
} = useTaskList();
// const { taskList } = taskListStore;
// const filteredTasks = taskListStore.filteredTasks;

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
