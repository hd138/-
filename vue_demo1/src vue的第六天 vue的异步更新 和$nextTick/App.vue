<template>
  <div id="app">
    <div v-if="isShow">
      <h3>{{ title }}</h3>
      <button @click="handlEdit">编辑</button>
    </div>
    <div v-else>
      <input ref="inp" v-model="editValue" type="text">
      <button>确认</button>
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  data() {
    return {
      title: '大标题',
      editValue: '',
      isShow: true
    }
  },

  components: {

  },
  methods: {
    handlEdit() {
      // 1. 显示输入框
      this.isShow = false
      // 2.让输入框获取焦点 $nextTick会等dom更新完，立即执行
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
    }
  },

}
</script>

<style lang="less"></style>
