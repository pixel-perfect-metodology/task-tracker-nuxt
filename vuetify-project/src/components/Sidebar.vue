<template>
  <!-- <v-navigation-drawer v-model="drawer"> -->
  <!--  -->
  <!-- </v-navigation-drawer> -->
  <!-- <v-navigation-drawer absolute rail color="grey-lighten-3"> -->
  <v-navigation-drawer v-model="drawer" class="pt-4" color="grey-lighten-3">
    <!-- <v-navigation-drawer
      v-model="drawer"
      class="pt-4"
      color="grey-lighten-3"
      rail
    > -->
    <!-- <v-navigation-drawer model-value class="pt-4" color="grey-lighten-3" rail> -->

    <!-- <v-sheet color="grey-lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

        <div>email@example.com</div>
      </v-sheet>

      <v-divider></v-divider> -->

    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>

        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar> -->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
interface Props {
  drawer?: boolean
}

const {drawer} = withDefaults(defineProps<Props>(), {
  drawer: false,
})

let { links } = {
  links: [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
  ],
};
</script>
