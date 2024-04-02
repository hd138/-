<template>
  <div class="sonA">
    我是sonA组件
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue';
export default {
  components: {
    GrandSon
  }
}
</script>

<style>
.sonA {
  width: 300px;
  height: 200px;
  border: 1px solid;
  margin: 10px auto;
}
</style>