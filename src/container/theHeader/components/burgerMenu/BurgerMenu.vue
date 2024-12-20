<template>
  <div class="burger-menu-container">
    <div class="top-part">
      <div class="burger-book">
        <img
          @click="closeBurgerMenu"
          class="burger-menu"
          src="@/assets/images/x.svg"
          alt="colse icon"
        />
      </div>
    </div>
    <div class="bm-items">
      <template v-for="item in options">
        <a class="item-style" :href="item.path" @click="closeBurgerMenu"
          >{{ item.name }}
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeMenu"]);

function closeBurgerMenu() {
  emit("closeMenu");
}

interface HeaderOption {
  id: number;
  name: string;
  path: string;
}

const options: HeaderOption[] = [
  {
    id: 1,
    name: "HOME",
    path: "/#home",
  },
  {
    id: 4,
    name: "RESTAURANT",
    path: "/#restaurant",
  },

  {
    id: 3,
    name: "MENU",
    path: "/#menu",
  },
  {
    id: 6,
    name: "FAQ",
    path: "/faq",
  },
  {
    id: 5,
    name: "CONTACT US",
    path: "/#contactUs",
  },
];
</script>

<style lang="scss" scoped>
@import "BurgerMenu.scss";
</style>
