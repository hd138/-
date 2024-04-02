<template>
  <div class="GRan">
    我是GrandSon组件
    {{ color }}
    {{ userInfo.name }} - {{ userInfo.age }}
  </div>
</template>

<script>
export default {
  inject: ['color', 'userInfo']
}
</script>

<style>
.GRan {
  width: 150px;
  height: 90px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
</style>