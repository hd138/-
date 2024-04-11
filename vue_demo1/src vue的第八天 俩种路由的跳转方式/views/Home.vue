<template>
  <div class="home">
    <input v-model="inpValue" type="text">
    <button @click="goSearch">搜索</button>
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
  name: 'HomeLink',
  data() {
    return {
      inpValue: ''
    }
  },
  methods: {
    goSearch() {
      // 通过路径的方式进行跳转
      // 1、 this.$router.push('页面路径')
      //     this.$router.push('页面路径?参数名=参数值')
      // this.$router.push(`/search?key=${this.inpValue}`)
      //  this.$router.push('/search') 简写

      // this.$router.push(`/search/${this.inpValue}`)

      // 2. this.$router.push({  完整写法
      //   path:'路由路径'
      //   query: {
      //     参数名: 参数值
      //   }
      // })
      // this.$router.push({
      //   path: '/search',
      //   query: {
      //     key: this.inpValue
      //   }
      // })

      // this.$router.push({
      //   path: `/search/${this.inpValue}`,
      // })

      // this.$router.push({
      //   path: '/search'
      // })

      // 2. 通过命名路由的方式跳转
      // this.$router.push({
      //   name:'参数名'
      // })
      this.$router.push({
        name: 'search',
        //  query: {
        //   key: this.inpValue
        // },
        params: {
          words: this.inpValue
        }
      })
      // this.$router.push({
      //   name: 'search'
      // })
    }
  }
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