<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="milestone in milestones" :key="milestone" cols="12">
        <v-card>
          <v-list lines="two">
            <v-list-subheader>
              <h3>
                {{ milestone.title }}
                {{ milestone.isCurrent ? '(current)' : '' }}
              </h3>

              <div>
                <div v-if="milestone.estimation">
                  estimation: {{ milestone.estimation }}
                </div>

                <div v-if="milestone.duration">
                  duration: {{ milestone.duration }}
                </div>
              </div>
            </v-list-subheader>
            <template
              v-for="(item, index) in milestoneItems.filter(
                (item) => item.milestoneId === milestone.id
              )"
              :key="item.id"
            >
              <v-list-item>
                <v-list-item-title>{{ item.title }}</v-list-item-title>

                <!-- <v-list-item-subtitle>
                  {{item.description}}
                </v-list-item-subtitle> -->
              </v-list-item>

              <v-divider
                v-if="index < milestoneItems.length - 1"
                :key="`divider-${index}`"
              />
            </template>
          </v-list>
        </v-card>
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
      estimation: '4d',
      duration: '4d',
      isCurrent: true,
    },
    { id: 2, title: 'Milestone 2', estimation: '1d' },
    { id: 3, title: 'Milestone 3', estimation: '6d' },
  ],
  milestoneItems: [
    {
      id: 1,
      type: 'feature',
      milestoneId: 1,
      title: 'Backlog page',
      duration: '4d',
      estimation: '4d',
      tasks: [
        {
          id: 10,
          type: 'task',
          parentId: 1,
          milestoneId: 1,
          title: 'Backlog page markup',
          estimation: '4h',
        },
        {
          id: 11,
          type: 'task',
          parentId: 1,
          milestoneId: 1,
          title: 'Backlog page display/manage items of a milestone',
          estimation: '4h',
        },
        {
          id: 12,
          type: 'task',
          parentId: 1,
          milestoneId: 1,
          title: 'Backlog page save and load data from db',
          estimation: '3d',
        },
      ],
    },

    {
      id: 2,
      type: 'feature',
      milestoneId: 2,
      title: 'Board page',
      estimation: '1d',
      tasks: [
        {
          id: 20,
          type: 'task',
          parentId: 2,
          milestoneId: 2,
          title: 'Board page markup',
          estimation: '2h',
        },
        {
          id: 21,
          type: 'task',
          parentId: 2,
          milestoneId: 2,
          title: 'Board page display/manage items of a board',
          estimation: '2h',
        },
        {
          id: 22,
          type: 'task',
          parentId: 2,
          milestoneId: 2,
          title: 'Board page save and load data from db',
          estimation: '4h',
        },
      ],
    },

    {
      id: 3,
      type: 'feature',
      milestoneId: 3,
      title: 'Reports page',
      estimation: '6d',
      tasks: [
        {
          id: 30,
          type: 'task',
          parentId: 3,
          milestoneId: 3,
          title: 'Reports page markup',
          estimation: '2d',
        },
        {
          id: 31,
          type: 'task',
          parentId: 3,
          milestoneId: 3,
          title: 'Reports page display/manage items of a board',
          estimation: '3d',
        },
        {
          id: 32,
          type: 'task',
          parentId: 3,
          milestoneId: 3,
          title: 'Reports page save and load data from db',
          estimation: '2h',
        },
      ],
    },

    {
      id: 4,
      type: 'feature',
      milestoneId: 3,
      title: 'Dashboard page',
      estimation: '1d',
      tasks: [],
    },
  ],
};
</script>
