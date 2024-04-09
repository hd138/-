<template>
  <div id="app">
    <!-- 2. 在使用组件时 组件标签内填入内容 -->
    <MyDialog></MyDialog>
    <MyDialog>
      <!-- <template v-slot:head>
          友情提示
        </template> -->
      <template #head>
        友情提示
      </template>
      <template #conter>
        你确定退出吗
      </template>
      <template #fooer>
        <button>确认</button>
        <button>取消</button>
      </template>
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
