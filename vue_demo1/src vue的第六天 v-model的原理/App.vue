<template>
  <div id="app">
    <!-- <input v-model="msg1" type="text"> <br><br>
    <input :value="msg2" @input="msg = $event.target.value" type="text"> -->
    <!-- <BaseSelect :cityId="selectId" @changId="selectId = $event"></BaseSelect> -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './commponents/BaseSelect.vue'

export default {

  name: 'App',
  data() {
    return {
      // msg1: '',
      // msg2: ''
      selectId: '104',
    }
  },

  components: {
    BaseSelect,

  },

}
</script>

<style lang="less">
#app {
  width: 500px;
  height: 600px;
  border: 1px solid;
  text-align: center;
  padding: 20px;
}
</style>
