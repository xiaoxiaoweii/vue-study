<template>
  <div id="Weather">
    <div v-if="showWeather">
      <weather-search />
      <weather-now />
      <weather-coming />
      <weather-more />
      <weather-sug />
    </div>
  </div>
</template>

<script>
import WeatherSearch from "./WeatherSearch";
import WeatherNow from "./WeatherNow";
import WeatherComing from "./WeatherComing";
import WeatherMore from "./WeatherMore";
import WeatherSug from "./WeatherSug";

export default {
  name: "Weather",
  components: {
    WeatherSearch,
    WeatherNow,
    WeatherComing,
    WeatherMore,
    WeatherSug
  },
  computed: {
    vuexaxioscity() {
      return this.$store.state.data;
    },
    showWeather() {
      return this.vuexaxioscity ? true : false;
    }
  },
  created() {
    this.sendDefaultUid();
  },
  methods: {
    sendDefaultUid() {
      this.$store.state.uid = "南京";
      this.$store.dispatch("getWeather");
    }
  }
};
</script>
