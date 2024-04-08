<template>
  <form action="">
    账号：<input type="text" v-model="account"><br>
    密码：<input type="text" v-model="password">
  </form>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    getValues() {
      return {
        account: this.account,
        password: this.password
      }
    },
    reserValues() {
      this.account = ''
      this.password = ''
    }
  },
}
</script>

<style></style>