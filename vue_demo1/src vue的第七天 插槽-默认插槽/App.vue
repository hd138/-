<template>
  <div id="app">
    <!-- 2. 在使用组件时 组件标签内填入内容 -->
    <MyDialog>
      你确认要删除吗
    </MyDialog>
    <MyDialog>
      你确认要退出吗
    </MyDialog>
    <MyDialog>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './commponents/MyDialog.vue';



export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    MyDialog
  },
  methods: {

  },

}
</script>

<style lang="less">
body {
  background-color: #B3B3B3;
}
</style>
