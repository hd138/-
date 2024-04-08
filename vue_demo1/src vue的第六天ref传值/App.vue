<template>
  <div id="app">
    <BaseForm ref="baseForm"></BaseForm>

    <button @click="handleGet">获取数据</button>
    <button @click="handlRes">重置数据</button>
    <span>{{ yh.account }}-{{ yh.password }}</span>
  </div>
</template>

<script>
import BaseForm from './commponents/BaseForm.vue';


export default {
  name: 'App',
  data() {
    return {
      yh: ''
    }
  },

  components: {
    BaseForm
  },
  methods: {
    handleGet() { 
      this.yh = this.$refs.baseForm.getValues()
    },
    handlRes() {
      this.$refs.baseForm.reserValues()
    }
  },

}
</script>

<style lang="less"></style>
