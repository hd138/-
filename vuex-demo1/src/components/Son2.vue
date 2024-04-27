<template>
  <div class="box1">
   <h1>我是son2</h1>
   从vuex中获取的值<span>{{ count }}</span>
   <br>
   <!-- <button @click="handleSub(1)">值减一</button>
   <button @click="handleSub(5)">值减五</button>
   <button @click="handleSub(10)">值减十</button> -->
     <button @click="subCount(5)">值减五</button>
     <button @click="changeTitle('我是码农')">改标题</button>
     <button @click="changeCountAction(888)">一秒之后改成888</button>
     <p>{{ list }} 大于5的数组{{ filterList }}</p>
     <p>{{ user }}</p>
     <p>{{ setting }}</p>
     <br>
     <!-- user的数据 -->
     <p>{{ userInfo }}</p>
     <!-- setting的数据 -->
     <p>{{ theme }}-{{ desc }}</p>

     <!-- 模块的getters -->
     <p>user模块的getters-{{ UpperCaseName }}</p>
    <button @click="handleName('李四')">改变模块user的name</button>
    <button @click="handleTheme('yellow')">改变模块setting的thmem</button>
    <button @click="timeScore(1000)">一秒后改变模块user的score</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'BoaSona',
  props: {
    num: Number
  },
  computed: {
    // mapState mapGetters 都是在映射属性
    ...mapState(['count', 'list', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // handleSub (val) {
    //   this.$store.commit('subCount', val)
    // }
    // mapMutations mapActions 都是在映射方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapMutations('user', ['handleName']),
    ...mapMutations('setting', ['ha`ndleTheme']),
    ...mapActions(['changeCountAction']),
    ...mapActions('user', ['timeScore'])
  }
}
</script>

<style>
.box1 {
  width: 200px;
  border: 1px solid;
  margin-top: 20px;
}
</style>