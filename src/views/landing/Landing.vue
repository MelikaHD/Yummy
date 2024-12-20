<template>
    <div class='main-landing-div'>
        <TopOfLanding  id="home"/>
        <Menu id="menu"/>
        <Restaurant id="restaurant"/>
        <TheFooter  id="contactUs"/>
    </div>
</template>


<script lang="ts" setup>
import TopOfLanding from '@/views/landing/components/topOfLanding/TopOfLanding.vue';
import Menu from '@/views/landing/components/menu/Menu.vue';
import Restaurant from '@/views/landing/components/restaurant/Restaurant.vue';
import TheFooter from '@/container/theFooter/TheFooter.vue';


</script>

<style lang="scss" scoped>
@import 'Landing.scss';
</style>