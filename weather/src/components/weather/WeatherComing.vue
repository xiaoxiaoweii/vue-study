<template>
  <div id="WeatherComing">
<div class="tem tem2 animated bounceInUp">
        <div class="imgline WeatherContent">
          <img src="../../assets/img/更多.svg" class="oicon" />
          <span>未来</span>
        </div>
        <div class="WeatherContent">
          <div>
            <ul>
              <li class="li1">{{this.$store.state.data.daily_forecast[1].date.substr(5)}}</li>
              <li class="li2">{{this.$store.state.data.daily_forecast[1].cond.txt_d}}</li>
              <li
                class="li3"
              >{{this.$store.state.data.daily_forecast[1].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[1].tmp.min+"°"}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="li1">{{this.$store.state.data.daily_forecast[2].date.substr(5)}}</li>
              <li class="li2">{{this.$store.state.data.daily_forecast[2].cond.txt_d}}</li>
              <li
                class="li3"
              >{{this.$store.state.data.daily_forecast[2].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[2].tmp.min+"°"}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="li1">{{this.$store.state.data.daily_forecast[3].date.substr(5)}}</li>
              <li class="li2">{{this.$store.state.data.daily_forecast[3].cond.txt_d}}</li>
              <li
                class="li3"
              >{{this.$store.state.data.daily_forecast[3].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[3].tmp.min+"°"}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="li1">{{this.$store.state.data.daily_forecast[4].date.substr(5)}}</li>
              <li class="li2">{{this.$store.state.data.daily_forecast[4].cond.txt_d}}</li>
              <li
                class="li3"
              >{{this.$store.state.data.daily_forecast[4].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[4].tmp.min+"°"}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="li1">{{this.$store.state.data.daily_forecast[5].date.substr(5)}}</li>
              <li class="li2">{{this.$store.state.data.daily_forecast[5].cond.txt_d}}</li>
              <li
                class="li3"
              >{{this.$store.state.data.daily_forecast[5].tmp.max+"°"}} / {{this.$store.state.data.daily_forecast[5].tmp.min+"°"}}</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "WeatherComing"
};
</script>