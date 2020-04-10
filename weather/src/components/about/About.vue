<template>
  <div id="About">
    <Introduction />
    <Copyright />
    <Donate />
  </div>
</template>
 
<script>
import Introduction from "./Introduction";
import Copyright from "./Copyright";
import Donate from "./Donate";


export default {
  name: "About",
  components: {
    Introduction,
    Copyright,
    Donate
  }
};
</script>

<style scoped>

</style>