<template>
  <div id="app">
    <keep-alive exclude="Home">
      <router-view />
    </keep-alive>
    <TabBarDemo />
  </div>
</template>

<script>
import TabBarDemo from "./components/tabbar/TabBarDemo";
export default {
  name: "App",
  components: {
    TabBarDemo
  }
};
</script>

<style>
@import "swiper/dist/css/swiper.css";
@import "./assets/style/base.css";
</style>
