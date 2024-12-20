<template>
  <div class="main-faq-div">
    <div class="content-faq-div">
      <TheHeader></TheHeader>

      <div class="main-contact-us">
        <div class="title-logo-div">
          <h2 class="title">
            Frequently Asked Questions
            <div class="line"></div>
          </h2>
        </div>
        <span class="description"
          >Please be advised that we reserve the right to deny entry at our discretion. We
          sincerely appreciate your understanding, cooperation, and consideration.</span
        >

        <div class="question-answer-div">
          <div
            class="box-question-answer-div"
            v-for="item in listQuestion"
            @click="changeStatusExpandQuestion(item)"
            :class="item.isExpand ? `box-rotate` : ``"
          >
            <div class="question-div">
              <span class="question" :class="item.isExpand ? `text-expanded` : ``">{{
                item.question
              }}</span>
              <img
                :class="item.isExpand ? `rotate` : ``"
                src="@/assets/images/icons/arrow-down.svg"
                alt="Arrow"
              />
            </div>
            <span class="answer" v-if="item.isExpand">{{ item.answer }}</span>
          </div>
        </div>
      </div>

      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import TheHeader from "@/container/theHeader/TheHeader.vue";
import TheFooter from "@/container/theFooter/TheFooter.vue";

const listQuestion = ref<any[]>([
  {
    id: 1,
    question: "Are there any age restrictions at Yummy?",
    answer: "Yummy Restaurant welcomes guests of all ages.",
    isExpand: false,
  },
  {
    id: 2,
    question: "Is non-physical ID (photo) accepted?",
    answer:
      "regulations, only physical forms of identification are acceptable for age verification.",
    isExpand: false,
  },
  {
    id: 3,
    question: "What is Yummy' dress code policy?",
    answer:
      "Yummy maintains a smart casual dress code. Kindly refrain from wearing tracksuits, jogger-style shorts, caps, and bucket hats. Please note the dress code applies specifically on Fridays and Saturdays.",
    isExpand: false,
  },
  {
    id: 4,
    question: "Is the food at Yummy Halal?",
    answer: "All of our dishes at Yummy are prepared using Halal ingredients.",
    isExpand: false,
  },
  {
    id: 5,
    question: "Can I make a reservation?",
    answer:
      "Reservations are not currently accepted for our Yummy Lounge. However, you can easily make reservations for our Restaurant through OpenTable, where you can experience delightful breakfasts, brunches, and dinners.",
    isExpand: false,
  },
]);

function changeStatusExpandQuestion(item: any) {
  item.isExpand = !item.isExpand;
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped lang="scss">
@import "Faq.scss";
</style>
