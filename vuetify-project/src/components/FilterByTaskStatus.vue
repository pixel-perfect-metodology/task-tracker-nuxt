<template>
  <v-row>
    <v-col class="mt-1" cols="auto">
      <strong>Filter by status:</strong>
    </v-col>
    <v-col cols="auto">
      <template v-for="statusName in statusNames">
        <v-chip
          class="mr-2"
          :ripple="false"
          link
          label
          :variant="statusName === selectedStatusName ? 'elevated' : 'text'"
          @click="$emit('change', statusName)"
        >
          {{ statusName?.toLowerCase().replace(/\_/gi, ' ') }}
        </v-chip>
      </template>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Props {
  status?: string;
}
const { status } = withDefaults(defineProps<Props>(), {
  status: 'ALL',
});

const emit = defineEmits<{
  (e: 'change', statusName: string): void;
  // (e: 'change', id: number): void
  // (e: 'update', value: string): void
}>();

const statusNames = [
  'ALL',
  'NEW',
  'IN_PROGRESS',
  'IN_TEST',
  'READY_TO_DEPLOY',
  'DONE',
];
const selectedStatusName = status || 'ALL';
</script>
