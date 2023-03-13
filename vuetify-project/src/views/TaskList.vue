<template>
  <v-container fluid>
    <!-- <v-row>
      <v-col class="pt-0 pb-0">
        <h1 class="text-h5 font-weight-medium text-medium-emphasis">Backlog</h1>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12">
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

          <v-divider
            v-if="index < tasks.length - 1"
            :key="`divider-${index}`"
          />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
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

const getTasksByFeatureId = (featureId: number) =>
  tasks.filter((task) => task.featureId === featureId);

const getMilestoneItemsByMilestoneId = (milestoneId: number) =>
  milestoneItems.filter((item) => item.milestoneId === milestoneId);

const getMilestoneTotalEstimationByMilestoneId = (milestoneId: number) =>
  getMilestoneItemsByMilestoneId(milestoneId).reduce(
    (curr, next) => curr + (next.estimation || 0),
    0
  );

const getPluralWordEnding = (count: number) => (count > 1 ? 's' : '');

const getHumanizedTime = (
  hoursOriginalValue: number,
  options //= { hoursInDay: 8, daysInWeek: 5 }
) => {
  const { hoursInDay, daysInWeek } = options || {
    hoursInDay: 8,
    daysInWeek: 5,
  };

  let hours = hoursOriginalValue;
  let weeks = 0;

  const hoursInWeek = hoursInDay * daysInWeek;
  if (hours >= hoursInWeek) {
    weeks = Math.trunc(hours / hoursInWeek);
    hours = hours - weeks * hoursInWeek;
  }

  let days = 0;
  if (hours >= hoursInDay) {
    days = Math.trunc(hours / hoursInDay);
    hours = hours - days * hoursInDay;
  }

  hours = hours % hoursInDay;

  let humanizedTimeString = [];
  if (weeks > 0) {
    humanizedTimeString.push(`${weeks} week${getPluralWordEnding(weeks)}`);
  }
  if (days > 0) {
    humanizedTimeString.push(`${days} day${getPluralWordEnding(days)}`);
  }
  if (hours > 0) {
    humanizedTimeString.push(`${hours} hour${getPluralWordEnding(hours)}`);
  }

  return humanizedTimeString.join(' ');
};
</script>
