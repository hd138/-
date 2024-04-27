<template>
  <div class="box2">
   <h2>我是son1</h2>
   从vuex中获取的值<span>{{ $store.state.count }}</span>
   <br>
   <button @click="add(1)">值加一</button>
   <button @click="add(5)">值加五</button>
   <button @click="add(10)">值加十</button>
   <button @click="handleChange">一秒之后修改成666</button>
   <p>数组：{{ $store.state.list }}</p>
   <p>大于5的数组 {{ $store.getters.filterList }}</p>
    <p>user - {{ $store.state.user.userInfo.name}}</p>
    <p>setting - {{ $store.state.setting.theme}}</p>
    <!-- 模块user的getters -->
    <p>模块user的getters {{ $store.getters['user/UpperCaseName'] }}</p>
    <button @click="handleName()">改变user模块的name</button>
    <button @click="handleTheme()">改变setting模块的theme</button>
    <p>{{ $store.state.user.score }}</p>
    <button @click="tiemScore(1000)">一秒之后改变user模块的score为1000</button>
  </div>
</template>

<script>
export default {
  name: 'BoaSon',
  props: {
    num: Number
  },
  created () {
    console.log(this.$store.state)
  },

  methods: {
    add (val) {
      // 错误代码 （vue默认不会监测 ， 监测需要成本）
      // this.$store.state.count++
      // 应该通过 mutation 核心概念 进行修改数据、
      // this.$store.commit('addCount', val)
      this.$store.commit('addCount', {
        val: val,
        msg: 'nihao'
      })
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字',额外参数)
      this.$store.dispatch('changeCountAction', 666)
    },
    handleName () {
      this.$store.commit('user/handleName', 'manong ')
    },
    handleTheme () {
      this.$store.commit('setting/handleTheme', 'red')
    },
    tiemScore (num) {
      this.$store.dispatch('user/timeScore', num)
    }
    // addFive () {
    //   this.$store.commit('addFive')
    // }
  }
}
</script>

<style>

.box2{
  width: 200px;
  border: 1px solid;
}
</style>