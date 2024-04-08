<template>
  <div id="app">
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
    <button @click="Modify">修改指令1</button>
  </div>
</template>

<script>



export default {
  name: 'App',
  data() {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  // mounted() {
  //   this.$refs.inp.focus()
  // },
  directives: {
    color: {
      // 1.inserted提供的是元素被添加到页面中时触发
      inserted(el, binding) {
        // console.log(el);
        el.style.color = binding.value
      },
      // 2. update 指令的值修改的时候触发，提供值变化后 dom更新的逻辑
      update(el, binding) {
        console.log('修改了');
        el.style.color = binding.value
      }
    }
  },


  components: {

  },
  methods: {
    Modify() {
      this.color1 = 'pink'
    }
  },

}
</script>

<style lang="less"></style>
