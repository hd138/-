<template>
  <div class="H5_home">
    <div class="conter">
      <!-- 二级路由出口 -->
      <router-view></router-view>
    </div>
    <nav class="tabber">
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout'
}
</script>

<style>
.H5_home {
  width: 100vw;
  height: 100vh;
  position: relative;

}

.tabber {
  width: 100%;
  height: 60px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
}

.tabber a {
  width: 100%;
  height: 100%;
  padding: 0 5px;
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.tabber a.router-link-active {
  background-color: pink;
  color: red;
}
</style>