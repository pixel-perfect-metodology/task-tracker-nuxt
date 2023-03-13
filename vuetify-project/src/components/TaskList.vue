<template>
  <v-list
    v-for="(task, index) in tasks"
    :key="task.id"
    lines="two"
    class="mt-n2 mb-n2 flex"
    rounded
  >
    <v-list-item>
      <v-list-item-title>
        <span class="font-weight-medium">TASK-{{ task.id }}</span>
        {{ task.title }}
      </v-list-item-title>

      <v-list-item-subtitle>
        <div>type: {{ task.type }}</div>
        <div>
          estimation:
          {{ getHumanizedTime(task.estimation) }}
        </div>
      </v-list-item-subtitle>

      <!-- <v-list-item-subtitle>
              <div v-if="task.subtasks?.length">
                {{ task.subtasks?.length }}
                subtask{{ getPluralWordEnding(task.subtasks?.length || 0) }}
              </div>
              <div v-if="!task.subtasks?.length">no subtasks</div>
            </v-list-item-subtitle> -->

      <!-- <div>
              {{ task.description }}
            </div> -->
    </v-list-item>

    <v-divider v-if="index < tasks.length - 1" :key="`divider-${index}`" />
  </v-list>
</template>

<script setup lang="ts">
import { getHumanizedTime } from '@/utils';

interface Props {
  tasks?: boolean;
}

const { tasks } = withDefaults(defineProps<Props>(), {
  tasks: [],
});
</script>
