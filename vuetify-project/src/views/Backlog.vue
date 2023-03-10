<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="milestone in milestones" :key="milestone" cols="12">
        <v-card>
          <v-list lines="two">
            <v-list-subheader>{{ milestone }}</v-list-subheader>
            <template v-for="n in 6" :key="n">
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="grey-darken-1"></v-avatar>
                </template>

                <v-list-item-title>Task {{ n }}</v-list-item-title>

                <v-list-item-subtitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nihil repellendus distinctio similique
                </v-list-item-subtitle>
              </v-list-item>

              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { milestones } = {
  milestones: ['milestone 1 (ongoing)', 'milestone 2', 'milestone 3'],
};
</script>
