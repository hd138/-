<template>
  <div>
    <p v-for="(item, index) in list" :key="item.id">
      {{ index + 1 }}. {{ item.name }} 
      <span @click="del(item.id)">X</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods:{
    del(id){
      this.$emit('delList',id)
    }
  }
}
</script>

<style></style>