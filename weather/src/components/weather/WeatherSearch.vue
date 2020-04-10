<template>
  <div id="WeatherSearch" class="animated bounce">
      <input
        class="oinput"
        type="text"
        @keydown.enter="getDataVuex(uid)"
        v-model="uid"
        placeholder="请输入想查询的城市"
      />
      <button @click="getDataVuex(uid)" class="btn-animate">查询</button>
    </div>
</template>

<script>
export default {
  name: "WeatherSearch",
   data() {
    return {
      uid: ""
    };
  },
  methods: {
    getDataVuex() {
      this.$store.state.uid = this.uid;
      this.$store.dispatch("getWeather");
    }
  },
};
</script>

<style scoped>
.oinput {
  width: 260px;
}
</style>