<template>
  <v-row>
    <v-col class="mt-1" cols="auto">
      <strong>Filter by status:</strong>
    </v-col>
    <v-col>
      <template v-for="statusName in statusNames">
        <v-chip
          class="mr-2"
          :ripple="false"
          link
          label
          variant="text"
          @click="$emit('change-filter-task-status', statusName)"
        >
          {{ statusName?.toLowerCase().replace(/\_/gi, ' ') }}
        </v-chip>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
const statusNames = [
  'ALL',
  'NEW',
  'IN_PROGRESS',
  'IN_TEST',
  'READY_TO_DEPLOY',
  'DONE',
];
const selectedStatusName = 'ALL';
// selectedStatusName == statusName ? false : "text"
</script>
