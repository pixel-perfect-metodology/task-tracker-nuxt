<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer"> -->
    <!--  -->
    <!-- </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" class="pt-4" color="grey-lighten-3">
      <!-- <v-navigation-drawer
      v-model="drawer"
      class="pt-4"
      color="grey-lighten-3"
      rail
    > -->
      <!-- <v-navigation-drawer model-value class="pt-4" color="grey-lighten-3" rail> -->
      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer>

    <HeaderNavbar @change-drawer-visibility="() => (drawer = !drawer)" />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue';
import HeaderNavbar from '../../components/HeaderNavbar.vue';
</script>

<script lang="ts">
export default {
  // data: () => ({ drawer: true }),
  data: () => ({ drawer: null }),
};
</script>
