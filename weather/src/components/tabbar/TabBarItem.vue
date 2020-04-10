<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  font-weight: 560;
  flex: 1;
  text-align: center;
  height: 70px;
  background-color: #f6f6f6;
}
.tab-bar-item img {
  width: 24px;
  padding-top: 6px;
  margin: 0px;
}
.active {
  color: #FFC0CB;
}
</style>
