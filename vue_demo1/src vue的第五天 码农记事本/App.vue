<template>
  <div id="app">
    <TodoHead @addMsg="addhand"></TodoHead>
    <TodoBody @delList="delhand" :list="list"></TodoBody>
    <TodoFooter :list="list" @kong="qkon"></TodoFooter>
  </div>
</template>

<script>
import TodoBody from './commponents/TodoBody.vue';
import TodoFooter from './commponents/TodoFooter.vue';
import TodoHead from './commponents/TodoHead.vue';




export default {
  name: 'App',
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        {
          id: 1, name: '打篮球'
        },
        {
          id: 2, name: '看电影'
        },
        {
          id: 3, name: '打游戏'
        },
      ]
    }
  },

  components: {
    TodoHead,
    TodoBody,
    TodoFooter
  },
  methods: {
    addhand(name) {
      this.list.unshift({
        id: +new Date(),
        name: name
      })
    },
    delhand(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    qkon(arr) {
      this.list = arr
    }

  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('list', JSON.stringify(newValue))
        console.log(newValue);
      }
    }
  }
}
</script>

<style lang="less"></style>
