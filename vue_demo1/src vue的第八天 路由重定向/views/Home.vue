<template>
  <div class="home">
    <input type="text">
    <button>搜索</button>
    <div class="link">热门搜索
      <!-- <router-link to="/search?key=程序员">程序员</router-link>
      <router-link to="/search?key=前端程序员">前端程序员</router-link>
      <router-link to="/search?key=后端程序员">后端程序员</router-link> -->
  <router-link to="/search/程序员">程序员</router-link>
      <router-link to="/search/前端程序员">前端程序员</router-link>
      <router-link to="/search/后端程序员">后端程序员</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLink'
}
</script>

<style>
.home {
  width: 500px;
  margin: 30px auto;
}

.link a {
  margin: 0 10px;
}
</style>