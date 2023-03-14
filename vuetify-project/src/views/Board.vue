<template>
  <v-container fluid class="fill-height d-flex align-start pb-0">
    <v-row
      class="d-flex align-start flex-xs-column-and-down"
      style="
        flex-wrap: nowrap;
        overflow-x: scroll;
        min-height: 100%;
        height: 100%;
      "
    >
      <template v-for="columnName in columns" :key="columnName">
        <v-col
          cols="auto"
          xl="2"
          lg="3"
          md="4"
          sm="6"
          xs="12"
          style="position: relative; min-height: 100%"
        >
          <h2
            class="text-h6 font-weight-medium"
            style="text-transform: capitalize !important"
          >
            {{ columnName }}
          </h2>

          <div style="position: absolute">
            <v-sheet
              class="pa-2 bg-grey-lighten-3 text-disabled"
              min-height="150"
              mi-width="150"
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
              <v-sheet
                class="mb-2"
                min-height="150"
                rounded
                :style="task.isDraft ? 'border: 1px dashed gray;' : ''"
              >
                <template
                  v-if="['in progress', 'blocked'].includes(columnName)"
                >
                  <v-progress-linear :model-value="task.progress" />
                </template>
                <div v-if="!task.isDraft" class="pa-2">
                  <b>
                    <sub> Task-{{ task.id }} </sub>
                  </b>
                  {{ task.title }}
                </div>
                <div
                  v-if="task.isDraft"
                  class="pa-2"
                  style="position: relative; height: 100%"
                >
                  <div
                    class="d-flex justify-center align-center text-disabled"
                    style="position: absolute; inset: 0; height: 100%"
                  >
                    <div class="text-h6" style="">New task</div>
                  </div>
                  <div>
                    {{ task.title }}
                  </div>
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
      {
        title: '<user role> need <goal> for/to <benefit>',
        isDraft: true,
      },
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

<style scoped>
/* .flex-xl-column,
.flex-lg-column,
.flex-md-column,
.flex-sm-column,
.flex-xs-column {
  flex-direction: column;
} */

@media (max-width: 599.98px) {
  .flex-xs-column-and-down {
    flex-direction: column;
  }
}

/* 
@media only print {
  .hidden-print-only {
    display: none !important;
  }
}
@media only screen {
  .hidden-screen-only {
    display: none !important;
  }
}
@media (max-width: 599.98px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 600px) and (max-width: 959.98px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 960px) and (max-width: 1279.98px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1280px) and (max-width: 1919.98px) {
  .hidden-lg {
    display: none !important;
  }
}
@media (min-width: 1920px) and (max-width: 2559.98px) {
  .hidden-xl {
    display: none !important;
  }
}
@media (min-width: 2560px) {
  .hidden-xxl {
    display: none !important;
  }
}

@media (min-width: 600px) {
  .hidden-sm-and-up {
    display: none !important;
  }
}
@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none !important;
  }
}
@media (min-width: 1280px) {
  .hidden-lg-and-up {
    display: none !important;
  }
}
@media (min-width: 1920px) {
  .hidden-xl-and-up {
    display: none !important;
  }
}
@media (max-width: 959.98px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}
@media (max-width: 1279.98px) {
  .hidden-md-and-down {
    display: none !important;
  }
}
@media (max-width: 1919.98px) {
  .hidden-lg-and-down {
    display: none !important;
  }
}
@media (max-width: 2559.98px) {
  .hidden-xl-and-down {
    display: none !important;
  }
} */
</style>
