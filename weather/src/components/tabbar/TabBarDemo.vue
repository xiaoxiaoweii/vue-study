<template>
    <div id="TabBarDemo">
    <tab-bar>
      <!-- <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/zhuye.svg" />
        <img slot="item-icon-active" src="../../assets/img/zhuyeactive.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item> -->
      <tab-bar-item path="/weather">
        <img slot="item-icon" src="../../assets/img/shouye.svg" />
        <img slot="item-icon-active" src="../../assets/img/shouyeactive.svg" />
        <div slot="item-text">天气</div>
      </tab-bar-item>
      <tab-bar-item path="/joke">
        <img slot="item-icon" src="../../assets/img/xinwenyulun.svg" />
        <img slot="item-icon-active" src="../../assets/img/xinwenyulunactive.svg" />
        <div slot="item-text">段子</div>
      </tab-bar-item>
      <!-- <tab-bar-item path="/about">
        <img slot="item-icon" src="../../assets/img/guanyuwomen.svg" />
        <img slot="item-icon-active" src="../../assets/img/guanyuwomenactive.svg" />
        <div slot="item-text">关于</div>
      </tab-bar-item> -->
    </tab-bar>
    </div>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'


export default {
    name:'TabBarDemo',
    components:{
    TabBar,
    TabBarItem
    }
}
</script>