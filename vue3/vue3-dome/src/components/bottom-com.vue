<template>
  <div>
   <h3>我是底层组件-{{ themeColor }} - {{ count }}</h3> 
   <button @click="clcikFn">更新count</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

const themeColor = inject('theme-color')

const count = inject('count')

const changeCount = inject('changeCount')

const clcikFn = () =>{
  changeCount(400)
}
</script>

<style>

</style>