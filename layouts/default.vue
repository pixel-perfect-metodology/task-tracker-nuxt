<template>
  <!-- TODO: add after https://github.com/nuxt/framework/issues/1909 -->
  <!-- <Head lang="en-US">
    <Title>Task Tracker</Title>
  </Head>-->

  <header>
    <h1>Task Tracker</h1>
    <p>Simple task tracker</p>
  </header>

  <template v-if="route.path !== '/'">
    <router-link to="/">→ Back Home</router-link>
    <hr />
  </template>

  <slot />

  <footer>// footer</footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.logo {
  width: 1.5rem;
  height: 1.5rem;
  max-width: 100%;
  margin-bottom: 0;
  color: white;
}
</style>
