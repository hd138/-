<template>
  <div id="app">
    <h1>根组件 - {{ title }} - {{ count }}</h1>
    <button @click="changeTitle">修改标题</button>
    <input :value="count" @input="blur" type="text" >
    <Son1></Son1>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'

console.log(mapState(['count']))

export default {
  name: 'App',
  created () {
    console.log(this.$store.state.count)
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  components: {
    Son1,
    Son2
  },
  methods: {
    changeTitle () {
      this.$store.commit('changeTitle', '码农烧烤')
    },
    blur (e) {
      const val = +e.target.value
      this.$store.commit('handleVal', val)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
