<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "./assets/fontDocument.css";
@import "./assets/references/index.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  transition: color 0.5s, background-color 0.5s;
  font-family: "Montserrat";
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}

html {
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  outline: none;
  text-decoration: none;
}
</style>
