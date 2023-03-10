<template>
  <v-app>
    <!-- <Sidebar :drawer="drawer" /> -->

    <HeaderNavbar @change-drawer-visibility="drawer = !drawer" />

    <default-view />
  </v-app>
</template>

<script setup lang="ts">
import DefaultView from './View.vue';
import HeaderNavbar from '@/components/HeaderNavbar';
import Sidebar from '@/components/Sidebar';

let { drawer } = {
  drawer: null,
};
</script>
