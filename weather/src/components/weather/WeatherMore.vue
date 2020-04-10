<template>
    <div id="WeatherMore">
 
      <div class="tem tem3 animated bounceInUp">
        <div class="imgline WeatherContent">
          <img src="../../assets/img/天气.svg" class="oicon" />
          <span>详情</span>
        </div>
        <div class="WeatherContent">
          <div>
            <div>
              <ul>
                <li class="oli1">维度：{{parseFloat(this.$store.state.data.basic.lat).toFixed(6)}}</li>
                <li>经度：{{parseFloat(this.$store.state.data.basic.lon).toFixed(6)}}</li>
                <li class="oli1">日出：{{this.$store.state.data.daily_forecast[0].astro.sr}}</li>
                <li>日落：{{this.$store.state.data.daily_forecast[0].astro.ss}}</li>
                <li class="oli1">月升：{{this.$store.state.data.daily_forecast[0].astro.mr}}</li>
                <li>月落：{{this.$store.state.data.daily_forecast[0].astro.ms}}</li>
                <li class="oli1">体感温度：{{this.$store.state.data.now.fl+"°"}}</li>
                <li>紫外线指数：{{this.$store.state.data.daily_forecast[0].uv}}</li>
                <li class="oli1">当前风向：{{this.$store.state.data.now.wind.dir}}</li>
                <li>全天风向：{{this.$store.state.data.daily_forecast[0].wind.dir}}</li>
                <li class="oli1">当前角度：{{this.$store.state.data.now.wind.deg+"°"}}</li>
                <li>全天角度：{{this.$store.state.data.daily_forecast[0].wind.deg+"°"}}</li>
                <li
                  class="oli1"
                >当前风速：{{parseFloat(this.$store.state.data.now.wind.spd*5/18).toFixed(2)+" m/s"}}</li>
                <li>全天风速：{{parseFloat(this.$store.state.data.daily_forecast[0].wind.spd*5/18).toFixed(2)+" m/s"}}</li>
                <li class="oli1">当前风级：{{this.$store.state.data.now.wind.sc+" 级"}}</li>
                <li>全天风级：{{this.$store.state.data.daily_forecast[0].wind.sc+" 级"}}</li>
                <li class="oli1">当前降水量：{{this.$store.state.data.now.pcpn}}</li>
                <li>全天降水量：{{this.$store.state.data.daily_forecast[0].pcpn}}</li>
                <li class="oli1">当前能见度：{{this.$store.state.data.now.vis+' 公里'}}</li>
                <li>全天能见度：{{this.$store.state.data.daily_forecast[0].vis+' 公里'}}</li>
                <li class="oli1">白天天气状态：{{this.$store.state.data.daily_forecast[0].cond.txt_d}}</li>
                <li>夜间天气状态：{{this.$store.state.data.daily_forecast[0].cond.txt_n}}</li>
                <li class="oli1">当前相对湿度：{{this.$store.state.data.now.hum}}</li>
                <li>全天相对湿度：{{this.$store.state.data.daily_forecast[0].hum}}</li>
                <li class="oli1">当前大气压强：{{this.$store.state.data.now.pres+"kPa"}}</li>
                <li>全天大气压强：{{this.$store.state.data.daily_forecast[0].pres+"kPa"}}</li>
                <li class="oli1">空气质量：{{ this.$store.state.data.aqi.city.qlty}}</li>
                <li>空气质量指数：{{this.$store.state.data.aqi.city.aqi}}</li>
                <li class="oli1">CO：{{this.$store.state.data.aqi.city.co}}</li>
                <li>NO2：{{this.$store.state.data.aqi.city.no2}}</li>
                <li class="oli1">O3：{{this.$store.state.data.aqi.city.o3}}</li>
                <li>SO2：{{ this.$store.state.data.aqi.city.so2}}</li>
                <li class="oli1">PM2.5：{{this.$store.state.data.aqi.city.pm25}}</li>
                <li>PM10：{{ this.$store.state.data.aqi.city.pm10}}</li>
                <li>更新时间：{{ this.$store.state.data.basic.update.loc}}</li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"WeatherMore"
}
</script>