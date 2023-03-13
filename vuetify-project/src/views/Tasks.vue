<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h6 font-weight-regular mt-n2 mb-3">Backlog</h2>

        <TaskList :tasks="tasks" />

        <h2 class="text-h6 font-weight-regular mt-6 mb-3">In progress</h2>

        <TaskList :tasks="tasks" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TaskList from '@/components/TaskList';

const { milestones, milestoneItems } = {
  milestones: [
    {
      id: 1,
      title: 'Milestone 1',
      duration: 4 * 24,
      isCurrent: true,
    },
    { id: 2, title: 'Milestone 2' },
    { id: 3, title: 'Milestone 3' },
  ],
  milestoneItems: [
    {
      id: 1,
      type: 'feature',
      milestoneId: 1,
      title: 'Backlog page',
      duration: 4 * 24,
      estimation: 4 * 24,
      tasks: [
        {
          id: 101,
          type: 'bug',
          featureId: 1,
          milestoneId: 1,
          title:
            'Vertical page scrollbar visible over the navigation panel on Backlog page',
          estimation: 4,
        },
        {
          id: 102,
          type: 'bug',
          milestoneId: 1,
          title: 'App name in navigation panel markup has incorrect style',
          estimation: 1,
        },
        {
          id: 10,
          type: 'task',
          featureId: 1,
          milestoneId: 1,
          title: 'Backlog page markup',
          estimation: 4,
        },
        {
          id: 11,
          type: 'task',
          featureId: 1,
          milestoneId: 1,
          title: 'Backlog page display/manage items of a milestone',
          estimation: 4,
        },
        {
          id: 12,
          type: 'task',
          featureId: 1,
          milestoneId: 1,
          title: 'Backlog page save and load data from db',
          estimation: 3 * 24,
        },
      ],
    },

    {
      id: 2,
      type: 'feature',
      milestoneId: 2,
      title: 'Board page',
      estimation: 1 * 24,
      tasks: [
        {
          id: 20,
          type: 'task',
          featureId: 2,
          milestoneId: 2,
          title: 'Board page markup',
          estimation: 2,
        },
        {
          id: 21,
          type: 'task',
          featureId: 2,
          milestoneId: 2,
          title: 'Board page display/manage items of a board',
          estimation: 2,
        },
        {
          id: 22,
          type: 'task',
          featureId: 2,
          milestoneId: 2,
          title: 'Board page save and load data from db',
          estimation: 4,
        },
      ],
    },

    {
      id: 3,
      type: 'feature',
      milestoneId: 3,
      title: 'Reports page',
      estimation: 6 * 24,
      tasks: [
        {
          id: 30,
          type: 'task',
          featureId: 3,
          milestoneId: 3,
          title: 'Reports page markup',
          estimation: 2 * 24,
        },
        {
          id: 31,
          type: 'task',
          featureId: 3,
          milestoneId: 3,
          title: 'Reports page display/manage items of a board',
          estimation: 3 * 24,
        },
        {
          id: 32,
          type: 'task',
          featureId: 3,
          milestoneId: 3,
          title: 'Reports page save and load data from db',
          estimation: 2,
        },
      ],
    },

    {
      id: 4,
      type: 'feature',
      milestoneId: 3,
      title: 'Dashboard page',
      estimation: 1 * 24,
      tasks: [],
    },
    {
      id: 5,
      type: 'feature',
      milestoneId: 3,
      title: 'Goals page',
      estimation: 2 * 24,
      tasks: [],
    },
  ],
};

const tasks = milestoneItems.map((item) => item.tasks).flat(1);
</script>
