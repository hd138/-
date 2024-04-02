<template>
  <div>
    <h3>码农记事本</h3>
    <div class="inputBox">
      <input @keyup.enter="add" v-model="msg" placeholder="请输入你的任务" type="text">
      <button @click="add" class="btn">添加任务</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    add() {
      this.$emit('addMsg', this.msg)
      this.msg = ''
    }
  }
}
</script>

<style></style>