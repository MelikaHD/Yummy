<template>
  <div class="main-container-div">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "../theHeader/TheHeader.vue";
</script>

<style>
@import "TheContainer.scss";
</style>
