<template>
  <div id="MyCarousel">
    <!-- swiper -->
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide>
        <a href="https://self-regulation.cn/">
          <div>
            <img src="../../assets/img/Home/542198.jpg" alt="slideimg1" class="slideimg" />
          </div>
          <span class="slidetext">作者博客</span>
        </a>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="../../assets/img/Home/753756.jpg" alt="slideimg2" class="slideimg" />
        </div>
        <span class="slidetext">不定期优化</span>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img
            src="../../assets/img/Home/cropped-1920-1080-667440.jpg"
            alt="slideimg3"
            class="slideimg"
          />
        </div>
        <span class="slidetext">感谢体验</span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "MyCarousel",
  data() {
    return {
      swiperOption: {
        effect: "slide",
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
.swiper {
  display: block;
  width: 94%;
  height: 211px;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
}
.slideimg {
  width: 100%;
  height: 211px;
  border-radius: 5px;
}
.slidetext {
  position: relative;
  top: -135px;
  color: white;
}
.swiper-pagination-bullet {
  background-color: #fff;
}
</style> 