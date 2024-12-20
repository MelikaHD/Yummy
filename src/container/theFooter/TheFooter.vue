<template>
  <div class="footer-div">
    <div class="footer">
      <div class="line"></div>
      <div class="footer-div-container">
        <div class="first-row">
          <span class="logo">Yummy!</span>
          <p class="footer-desc">
            Follow our culinary adventures on social media. Your satisfaction is our
            priority.
          </p>
          <div class="email-phone-div">
            <div class="email-div">
              <a href="mailto:info@Yummy.co" class="link">
                <img
                  src="@/assets/images/footer/email.svg"
                  alt="email"
                  class="email-icon"
                />
                <span class="email-text">info@Yummy.co</span>
              </a>
            </div>
            <div class="phone-div">
              <a href="tel:+123456789" class="link">
                <img
                  src="@/assets/images/footer/phone.svg"
                  alt="phone"
                  class="phone-icon"
                />
                <span class="phone-text">+123 456 789</span>
              </a>
            </div>
          </div>
          <div class="social-container">
            <div class="social-icon-div">
              <img
                src="@/assets/images/footer/instagram.svg"
                alt="instagram"
                class="social-icon"
              />
              <img
                src="@/assets/images/footer/TikTok.svg"
                alt="TikTok"
                class="social-icon"
              />
              <img
                src="@/assets/images/footer/Facebook.svg"
                alt="Facebook"
                class="social-icon"
              />
            </div>
          </div>
        </div>
        <div class="second-row">
          <p class="title-row">Quick link</p>
          <div class="item-part">
            <template v-for="item in options" :key="item.id">
              <a :href="item.path" class="each-item">{{ item.name }}</a>
            </template>
          </div>
        </div>
        <div class="third-row">
          <p class="title-row">Opening Hours</p>
          <div class="item-part">
            <p class="each-item-title">Sunday-Thursday :</p>
            <p class="each-item">2:00 PM To 00:00AM</p>
          </div>
          <div class="item-part">
            <p class="each-item-title">Friday-Saturday :</p>
            <p class="each-item">2:00 PM To 00:00AM</p>
          </div>
        </div>
        <div class="forth-row">
          <p class="title-row">Direction</p>
          <div class="location-info">
            <a href="#" class="link">
      
              <span class="location-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, placeat</span
              >
            </a>
          </div>
          <div class="map-div">
            <a href="#" class="a-map">
              <img src="@/assets/images/map.png" alt="map" class="map-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="line2"></div>
      <div class="under-footer">
        <p class="under-line">
          Copyright © 2023 Yummy Restsurant. All Rights Reserved.
          <b>v0.1</b>
        </p>
        <p class="under-line"><span class="privacy">Privacy</span>| Terms of Service</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
    id: 2,
    name: "Restaurant",
    path: "/#restaurant",
  },
  {
    id: 3,
    name: "Menu",
    path: "/#menu",
  },
];
</script>

<style lang="scss" scoped>
@import "TheFooter.scss";
</style>
