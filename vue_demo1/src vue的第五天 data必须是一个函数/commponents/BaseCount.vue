<template>
  <div class="bast_count">
    <button @click="handleSub()">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd()">+</button>
  </div>
</template>

<script>
export default {
  // data必须是一个函数 保证每个组件实例 维护独立的 
  // 自己的数据随便改
  // data() {
  //   return {
  //     count: 999
  //   }
  // },
  // props传过来的数据（外部的数据不能直接改） 不能直接改

  // 单向数据流：父组件的props更新，会单向的向下流动，影响到了子组件
  props: {
    count: Number
  },
  methods: {
    handleSub() {
      this.$emit('changeCount', this.count - 1)
    },
    handleAdd() {
      this.$emit('changeCount', this.count + 1)
    },
  }
}
</script>

<style scoped>
.bast_count {
  margin: 20px;
}
</style>