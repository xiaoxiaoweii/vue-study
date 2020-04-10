<template>
  <div class="tab-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Tab-bar"
};
</script>

<style scoped>
.tab-bar {
  color: #8a8a8a;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
