<template>
  <div>
    <div class="divContent animated bounceInUp">如果觉得有帮助到你，可以给我买一杯果汁表示鼓励🍹</div>
    <div class="donate-box animated bounceInUp">
      <img src="@/assets/img/about/3.png" class="left-side" />
      <img src="@/assets/img/about/6.png" class="paychoose" />
      <img src="@/assets/img/about/4.png" class="right-side" />
    </div>
  </div>
</template>

<script>
export default {
    name:'Donate'
};
</script>

<style scoped>
.donate-box {
    position: relative;
    height: 300px;
}
.donate-box .left-side{
    position: absolute;
    left: 0;
}

.donate-box .right-side{
    position: absolute;
    right: 0;
}
.left-side, .right-side {
    width: 17%;
}
.paychoose {
    width: 16em;
    position: absolute;
    left: 0;
    right: 0;
    height: 16em;
    background-size: cover;
        margin: 0 auto;
}
</style>
