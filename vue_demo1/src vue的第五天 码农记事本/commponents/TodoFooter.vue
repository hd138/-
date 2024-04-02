<template>
  <div class="bottom">
    <span>合计：{{ list.length }}</span>
    <span @click="qkong">清空任务</span>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    qkong() {
      this.$emit('kong', [])
    }
  }

}
</script>

<style></style>