<template>
  <div>
    <div class="box">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
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
  width: 360px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;
    padding: 0 20px;
    width: 80px;
    text-align: center;
    color: #fff;
    line-height: 60px;
    border-left: 1px solid #000;
    background-color: #333333;
  }
}
</style>
