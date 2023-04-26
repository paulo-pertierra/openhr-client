<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: url("/authbg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
