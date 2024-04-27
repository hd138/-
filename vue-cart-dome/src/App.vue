<template>
  <div id="app">
    <CareHeader></CareHeader>
    <CareItem v-for="item in list" :key="item.id" :item="item"></CareItem>
    <CareFooter></CareFooter>
  </div>
</template>

<script>
import CareHeader from './components/care-header.vue'
import CareItem from './components/care-item.vue'
import CareFooter from './components/care-footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  created () {
    this.$store.dispatch('care/getList')
  },
  computed: {
    ...mapState('care', ['list'])
  },
  components: {
    CareHeader,
    CareItem,
    CareFooter
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
