<template>
  <div>
    <div class="tem tem2 animated bounceInUp">
      <div class="imgline WeatherContent">
        <img src="../../assets/img/标签.svg" class="oicon" />
        <span>一言</span>
      </div>
      <div class="WeatherContent">
          {{this.$store.state.AWord}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
 
export default {
  name: "OneWord",
};
</script>

<style scoped>
</style>