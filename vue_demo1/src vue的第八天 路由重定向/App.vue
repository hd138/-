<template>
  <div>
    <div class="box">
      <router-link to="/home">首页</router-link>
      <router-link to="/Search">搜索</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // 测试组件功能
      // bq: '茶壶',
      // bq2: '111',

    }
  },

  components: {

  },
  methods: {
    // handlchun2(id) {
    //   this.bq = id
    // }
  },

}

</script>

<style lang="less">
.box {
  width: 240px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;
    padding: 0 22px;
    width: 80px;
    text-align: center;
    color: #fff;
    line-height: 60px;
    border-left: 1px solid #000;
    background-color: #333333;


  }

  a.exact-active {
    background-color: pink;
  }

  a:hover {
    background-color: purple;
  }
}

/*
  router-link-active 模糊匹配 (用的更多一点 )
  to='/find' => 地址栏/find /find/my

  router-link-exact-active 精确匹配
  to='/find' => 地址栏 /find
*/
</style>
