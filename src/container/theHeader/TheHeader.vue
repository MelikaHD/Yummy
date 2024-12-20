<template>
  <div class="main-header-div">
    <div class="container-header">
      <div class="logo-div">
        <router-link to="/#home">
          <span class="logo">Yummy!</span>
        </router-link>
      </div>
      <div class="menu-item-div">
        <template v-for="item in options" :key="item.id">
          <a :href="item.path" class="item">{{ item.name }}</a>
          <div class="vline"></div>
        </template>
      </div>
      <div class="burger-book">
        <img
          @click="openBurger"
          class="burger-menu"
          src="@/assets/images/burger.svg"
          alt="Burger Menu"
        />
        <BurgerMenu v-if="burgerMenuStatus" @close-menu="closeBurgerMenu" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BurgerMenu from "./components/burgerMenu/BurgerMenu.vue";

interface HeaderOption {
  id: number;
  name: string;
  path: string;
}

const burgerMenuStatus = ref(false);
const options: HeaderOption[] = [
  {
    id: 1,
    name: "HOME",
    path: "/#home",
  },
  {
    id: 2,
    name: "RESTAURANT",
    path: "/#restaurant",
  },
  {
    id: 3,
    name: "MENU",
    path: "/#menu",
  },
  {
    id: 4,
    name: "FAQ",
    path: "/FAQ",
  },
  {
    id: 5,
    name: "CONTACT US",
    path: "/#contactUs",
  },
];

function closeBurgerMenu() {
  burgerMenuStatus.value = false;
}

function openBurger() {
  burgerMenuStatus.value = !burgerMenuStatus.value;
}
</script>

<style lang="scss" scoped>
@import "TheHeader.scss";
</style>
