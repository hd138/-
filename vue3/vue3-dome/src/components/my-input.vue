<template>
  <input :value="modelValue" 
  @input="e => modelValue = e.target.value" type="text" name="" id="">
</template>

<script setup>
import { defineModel } from 'vue'
const modelValue = defineModel()
</script>

<style>

</style>