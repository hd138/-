<template>
  <div id="app">
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
  </div>
</template>

<script>
import BaseA from './commponents/BaseA.vue';
import BaseB from './commponents/BaseB.vue';
import BaseC from './commponents/BaseC.vue';






export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    BaseA,
    BaseB,
    BaseC

  },
  methods: {


  },
  watch: {

  }
}
</script>

<style lang="less"></style>
