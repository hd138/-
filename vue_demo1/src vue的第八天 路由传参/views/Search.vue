<template>
  <div class="search">
    <!-- <div class="title">搜索关键词： {{ $route.query.key }}</div> -->
    <div class="title">搜索关键词： {{ $route.params.words }}</div>
    <div class="result">结果：</div>
  </div>
</template>

<script>
export default {
  name: 'SearchLink',
  created() {
    // 在created中获取路由参数
    // this.$route.query.参数名 获取查询参数
    // this.$route.params.参数名 获取动态路由参数
    //  console.log(this.$route.query.key);
    console.log(this.$route.params.words);
  }
}
</script>

<style>
.search {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
}
</style>