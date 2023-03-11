<template>
  <v-container fluid>
    <FilterByTaskStatus
      @change="onChangeFilterTaskStatus"
      :status="filter.status"
    />

    <v-row>
      <template v-for="n in 4" :key="n">
        <v-col class="mt-2" cols="12">
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
          <v-sheet height="150">
            <v-progress-linear model-value="20"></v-progress-linear>
          </v-sheet>
        </v-col>
      </template>
    </v-row>

    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item v-for="n in 5" :key="n" link>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey-lighten-4">
              <v-list-item-title> Refresh </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FilterByTaskStatus from '@/components/FilterByTaskStatus';

const data = {
  cards: ['Today', 'Yesterday'],
  links: [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
  ],
};
const { cards, links } = data;

const filter = {
  status: '',
};

const onChangeFilterTaskStatus = (newStatus) => {
  filter.status = newStatus;
  console.log({ newStatus, filter });
};
</script>
