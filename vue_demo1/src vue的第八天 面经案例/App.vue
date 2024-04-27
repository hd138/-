<template>
  <div>
    <!-- 包裹了keep-alive 一级路由匹配的组件都会被缓存
    Layout组件 Detail组件，都会被缓存

    需求只希望Layout被缓存 include配置

    :include [组件名]
    -->
    <keep-alive :include="keepArr">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // 缓存组件名的数组
      // 组件缓存了，旧不会执行组件的created mounted destroyed
      // 所以提供了俩个新钩子 actived 和deactiv ed
      keepArr: ['HomeLayout']
    }
  },
  created() {
    console.log('created，组件被加载了');
  },
  mounted() {
    console.log('mounted，dom渲染完了');
  },
  destroyed() {
    console.log(' destroyed，组件被销毁了');
  },
  activated() {
    console.log('activated 组件被激活了 进入页面了');
  },
  deactivated() {
    console.log('deactivated 组件失活了 离开页面了');
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
body {
  margin: 0;
  padding: 0;
}
</style>
