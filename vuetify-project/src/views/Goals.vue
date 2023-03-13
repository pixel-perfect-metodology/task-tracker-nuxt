<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-end text-medium-emphasis pt-1 pb-0">
        <div class="d-flex">
          <div class="ml-4">
            <small> day - it's work day (8 hours) </small>
          </div>
          <div class="ml-4">
            <small> week - it's work week (5 days) </small>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-timeline
          truncate-line="both"
          side="end"
          align="start"
          class="d-flex flex-column"
        >
          <v-timeline-item
            v-for="milestone in milestones"
            :key="milestone.id"
            dot-color="grey"
            size="x-small"
            class="d-flex flex-row-reverse justify-end"
            style="width: 100%"
            width="100%"
          >
            <h3 class="font-weight-regular" style="margin-top: -0.1em">
              {{ milestone.title }}
              {{ milestone.isCurrent ? '(current)' : '' }}
            </h3>

            <div class="text-medium-emphasis font-weight-regular mb-2">
              <small>
                <div>
                  estimation:
                  {{
                    getHumanizedTime(
                      getMilestoneTotalEstimationByMilestoneId(milestone.id)
                    )
                  }}
                </div>

                <div v-if="milestone.duration">
                  duration: {{ getHumanizedTime(milestone.duration) }}
                </div>
              </small>
            </div>

            <v-card>
              <v-list lines="two" class="mt-n2 mb-n2 flex">
                <template
                  v-for="(item, index) in getMilestoneItemsByMilestoneId(
                    milestone.id
                  )"
                  :key="item.id"
                >
                  <v-list-item>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>

                    <v-list-item-subtitle>
                      <!-- <div>type: {{ item.type }}</div> -->
                      <div>
                        estimation:
                        {{ getHumanizedTime(item.estimation) }}
                      </div>
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                      <div v-if="item.tasks?.length">
                        {{ item.tasks?.length }}
                        task{{ getPluralWordEnding(item.tasks?.length || 0) }}
                      </div>
                      <div v-if="!item.tasks?.length">no tasks</div>
                    </v-list-item-subtitle>

                    <div>
                      {{ item.description }}
                    </div>
                  </v-list-item>

                  <v-divider
                    v-if="
                      index <
                      getMilestoneItemsByMilestoneId(milestone.id).length - 1
                    "
                    :key="`divider-${index}`"
                  />
                </template>
              </v-list>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
          id: 10,
          type: 'task',
          parentId: 1,
          milestoneId: 1,
          title: 'Backlog page markup',
          estimation: 4,
        },
        {
          id: 11,
          type: 'task',
          parentId: 1,
          milestoneId: 1,
          title: 'Backlog page display/manage items of a milestone',
          estimation: 4,
        },
        {
          id: 12,
          type: 'task',
          parentId: 1,
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
          parentId: 2,
          milestoneId: 2,
          title: 'Board page markup',
          estimation: 2,
        },
        {
          id: 21,
          type: 'task',
          parentId: 2,
          milestoneId: 2,
          title: 'Board page display/manage items of a board',
          estimation: 2,
        },
        {
          id: 22,
          type: 'task',
          parentId: 2,
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
          parentId: 3,
          milestoneId: 3,
          title: 'Reports page markup',
          estimation: 2 * 24,
        },
        {
          id: 31,
          type: 'task',
          parentId: 3,
          milestoneId: 3,
          title: 'Reports page display/manage items of a board',
          estimation: 3 * 24,
        },
        {
          id: 32,
          type: 'task',
          parentId: 3,
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
  ],
};

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
