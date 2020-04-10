<template>
   <keep-alive>
    <div class="news animated bounceInLeft">欢迎你 ip：{{ip}} 的朋友 ~</div>
   </keep-alive>
</template>

<script>
import axios from "axios";
export default {
  name: "news",
  data() {
    return {
      ip: ""
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$jsonp("https://bird.ioliu.cn/ip")
        .then(Response => {
          this.ip = Response.data.ip;
          // Success.
        })
        .catch(err => {
          // Failed.
          console.log(失败);
        });
    }
  }
};
</script>

<style scoped>
.news {
  position: relative;
  margin: 20px 10px;
  padding: 3px 5px;
  text-align: center;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
