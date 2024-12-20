<template>
  <div class="breakfast-container">
    <h1 class="food-part-title">Breakfast</h1>

    <div class="sidebar-container">
      <div
        class="sidebar"
        v-for="(item, index) in breakfastFilter"
        :key="index"
        :class="{ active: item.isSelected }"
        @click="selectSubCategory(item)"
      >
        <span class="sidebar-title">{{ item.name }}</span>
      </div>
    </div>
    <div class="food-part-container">
      <div class="food-card" v-for="food in filteredFoodsBySubCategory" :key="food.id">
        <div class="img-food-card-container">
          <img :src="food.mainImage" alt="food img" class="img-food-card" />
        </div>
        <span class="food-card-price">{{ food.name }}</span>

        <span class="food-card-desc">{{ food.description }}</span>
        <span class="food-card-price">{{ food.price }} $</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { foods } from "@/stores/FoodStore";
import type { Food } from "@/interfaces/Food";

const breakfastFilter = ref([
  { name: "Breakfast", isSelected: true },
  { name: "Hot Drinks", isSelected: false },
  { name: "Soft Drinks", isSelected: false },
  { name: "Brunch", isSelected: false },
  { name: "Kids", isSelected: false },
  { name: "Smoothie's", isSelected: false },
  { name: "Sides", isSelected: false },
]);

const selectedFoodsByCategory = ref<Food[]>([]);

const filteredFoodsBySubCategory = ref<Food[]>([]);

const filterFoodsBySubCategory = (selectedSubCategory: string) => {
  filteredFoodsBySubCategory.value = selectedFoodsByCategory.value.filter((food) =>
    food.subCategory.includes(selectedSubCategory)
  );
};

onMounted(() => {
  selectedFoodsByCategory.value = foods.value.filter(
    (food) => food.category === "Breakfast"
  );

  const defaultSubCategory = breakfastFilter.value.find((item) => item.isSelected)?.name;
  if (defaultSubCategory) {
    filterFoodsBySubCategory(defaultSubCategory);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
});

const selectSubCategory = (selectedItem: any) => {
  breakfastFilter.value.forEach((item) => (item.isSelected = false));

  selectedItem.isSelected = true;

  filterFoodsBySubCategory(selectedItem.name);
};
</script>

<style>
@import "Breakfast.scss";
</style>
