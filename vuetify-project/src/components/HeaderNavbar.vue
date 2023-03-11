<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <!-- <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar> -->

      <!-- <v-app-bar-nav-icon
        @click="onChangeSidebarVisibility"
      ></v-app-bar-nav-icon> -->

      <router-link to="/">
        <v-toolbar-title>Task tracker</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <template v-for="link in links" :key="link">
        <template v-if="link.url && link.label">
          <router-link :to="link.url">
            <v-btn variant="text">
              {{ link.label }}
            </v-btn>
          </router-link>
        </template>
      </template>

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-responsive max-width="260">
        <v-text-field
          density="compact"
          hide-details
          variant="solo"
        ></v-text-field>
      </v-responsive> -->
    </v-container>

    <!-- <v-app-bar> -->
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title> -->
    <!-- </v-app-bar> -->
  </v-app-bar>
</template>

<script setup lang="ts">
const { links } = {
  links: [
    // {
    //   url: '/',
    //   label: 'Home',
    // },
    {
      url: '/backlog',
      label: 'Backlog',
    },
    {
      url: '/board',
      label: 'Board',
    },
    // {
    //   url: '/reports',
    //   label: 'Reports',
    // },
  ],
};

interface Props {
  drawer?: boolean;
}

const { drawer } = withDefaults(defineProps<Props>(), {
  drawer: false,
});

const emit = defineEmits<{
  (e: 'change', value: boolean): void;
}>();

function onChangeSidebarVisibility() {
  emit('change', !drawer);
}
</script>
