<template>
  <div class="menu-part-container">
    <h2 class="menu-title">MENU</h2>
    <div class="menu-cards-container">
      <div class="menu-card">
        <RouterLink :to="`Menu/Breakfast`" class="link">
          <img src="@/assets/images/breakfast.jpg" alt="Breakfast-img" class="menu-card-img" />
          <span class="menu-card-title">Breakfast</span>
        </RouterLink>
      </div>
      <div class="menu-card">
        <RouterLink :to="`Menu/Lunch&Dinner`" class="link">
          <img src="@/assets/images/dinner.jpg" alt="Lunch-img" class="menu-card-img" />
          <span class="menu-card-title">Lunch & Dinner</span>
        </RouterLink>
      </div>
      <div class="menu-card">
        <RouterLink :to="`Menu/Drinks`" class="link">
          <img src="@/assets/images/drink.jpg" alt="Drinks-img" class="menu-card-img" />
          <span class="menu-card-title">Drinks</span>
        </RouterLink>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "Menu.scss";
</style>
