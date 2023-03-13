<template>
  <v-container fluid class="fill-height d-flex align-start">
    <v-row
      class="d-flex align-start"
      style="flex-wrap: nowrap; overflow-x: scroll"
    >
      <template v-for="columnName in columns" :key="columnName">
        <v-col
          cols="auto"
          xl="2"
          lg="3"
          md="4"
          sm="6"
          xs="12"
          class="fill-height"
          style="position: relative"
        >
          <h2
            class="text-h6 font-weight-medium"
            style="text-transform: capitalize !important"
          >
            {{ columnName }}
          </h2>

          <div
            
            style="position: absolute"
          >
            <v-sheet
              class="pa-2 bg-grey-lighten-3 text-disabled"
              min-height="150"
              rounded
            >
              <sub> no tasks </sub>
            </v-sheet>
          </div>

          <draggable
            :list="tasks[columnName]"
            group="tasks"
            @start="drag = true"
            @end="drag = false"
            item-key="title"
            style="position: relative"
            class="fill-height d-flex flex-column"
          >
            <template #item="{ element: task, index }">
              <v-sheet class="mb-2" min-height="150" rounded>
                <template
                  v-if="['in progress', 'blocked'].includes(columnName)"
                >
                  <v-progress-linear :model-value="task.progress" />
                </template>
                <div class="pa-2">
                  <b
                    ><sub> Task-{{ task.id }} </sub></b
                  >
                  {{ task.title }}
                </div>
              </v-sheet>
            </template>
          </draggable>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

const { columns, tasks } = {
  columns: ['todo', 'blocked', 'in progress', 'in test', 'acceptance', 'done'],
  tasks: {
    todo: [
      { id: 5, title: 'create markup for reports page' },
      { id: 6, title: 'create demo data for backlog page' },
      { id: 7, title: 'create demo data for board page' },
    ],
    blocked: [{ id: 4, title: 'create markup for reports page', progress: 10 }],
    ['in progress']: [
      { id: 3, title: 'create markup for board page', progress: 40 },
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
    done: [
      { id: 2, title: 'create markup for backlog page' },
      { id: 1, title: 'create markup of layout page' },
    ],
  },
};
</script>
