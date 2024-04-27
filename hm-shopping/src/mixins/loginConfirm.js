export default {
  // 此处编写的就是Vue组件实例的配置项，通过一定的语法，可以直接混入到组件内部
  // data methods computed
  // 注意点：如果此处和组件内，提供了同名的data或者 methods 则组件内优先级更高
  methods: {
    // 根据登录状态，判断是否需要显示登录确实框
    // 1. 如果未登录 => 显示确认框 返回true
    // 2. 如果已登录 => 啥也不干 返回false
    loginConfirm () {
      // 判断token是否存在
      // 1. 如果token不存在，弹出确认框
      // 2， 如果token存在，继续请求操作
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此时需要先登录才能继续操作哦',
          confirmButtonText: '去登陆',
          cancelButtonText: '再逛逛'
        }).then(() => {
          // 如果希望，跳转到登录 =》 登录后能跳转回来，需要在跳转去携带参数（当前路径地址）
          // this.$route.fullPath(会包含查询参数)
          this.$router.push({
            path: '/login',
            query: {
              backUrl: this.$route.fullPath
            }
          })
        }).catch(() => { })
        return true
      }
      return false
    }
  }
}
