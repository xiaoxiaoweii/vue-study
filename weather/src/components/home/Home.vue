<template>
  <div id="Home">
    <news />
    <my-carousel />
    <OneWord />
  </div>
</template>

<script>
import MyCarousel from "./MyCarousel"
import News from './News'
import OneWord from './OneWord'

export default {
  name: "Home",
  components: {
    MyCarousel,
    News,
    OneWord
  }
};
</script>

<style scoped>
</style>
