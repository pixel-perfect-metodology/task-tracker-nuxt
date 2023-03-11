<template>
  <v-container fluid>
    <v-row>
      <template v-for="columnName in columns" :key="columnName">
        <v-col cols="2">
          <strong style="text-transform: capitalize">{{ columnName }}</strong>

          <template v-if="!tasks[columnName]?.length">
            <v-sheet height="150"> no tasks </v-sheet>
          </template>

          <template v-for="task in tasks[columnName]" :key="task.title">
            <v-sheet height="150" rounded>
              <v-progress-linear model-value="20"></v-progress-linear>
              <div>{{ task.title }}</div>
            </v-sheet>
          </template>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { columns, tasks } = {
  columns: ['todo', 'blocked', 'in progress', 'in test', 'acceptance', 'done'],
  tasks: {
    todo: [
      { title: 'create markup for reports page' },
      { title: 'create demo data for backlog page' },
      { title: 'create demo data for board page' },
    ],
    blocked: [
      // empty
    ],
    ['in progress']: [
      { title: 'create markup for board page', progress: 20 },
      // only 1 per time
    ],
    ['in test']: [
      // empty
      // only 1 per time
    ],
    acceptance: [
      // empty
      // only 1 per time
    ],
    done: [{ title: 'create markup for backlog page' }],
  },
};
</script>
