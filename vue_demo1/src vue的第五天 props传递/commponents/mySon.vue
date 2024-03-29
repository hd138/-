<template>
  <div class="userInfo">
    <h3>我是个人信息组件</h3>
    <div>姓名：{{ username }}</div>
    <div>年纪: {{ age }}</div>
    <div>是否单身: {{ isSingle ? '是' : '否' }}</div>
    <div>座驾:{{ car.brand }}</div>
    <div>爱好:{{ hobby.join('、') }}</div>
  </div>
</template>

<script>
export default {
  // data必须是一个函数 保证每个组件实例 维护独立的 
  props: ['username', 'age', 'isSingle', 'car', 'hobby'],
  methods: {
    changeFn() {
      // 通过$emit，向父组件发消息通知
      this.$emit('changeTitle', '码农烧烤')
    }
  }
}
</script>

<style scoped>
.userInfo {
  border: 3px solid;
  margin: 20px;
  padding: 20px;
}

.userInfo div {
  padding: 10px 0;
}
</style>