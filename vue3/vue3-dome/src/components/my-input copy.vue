<template>
  <input :value="modelValue" 
  @input="e => emit('update:modelValue', e.target.value)" type="text" name="" id="">
</template>

<script setup>
  defineProps({
    modelValue:String
  })
  const emit =  defineEmits(['update:modelValue'])
</script>

<style>

</style>