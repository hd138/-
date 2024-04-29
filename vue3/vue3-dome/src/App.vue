<script setup>
  import { ref } from 'vue';
  import myInput from './components/my-input.vue';

  const txt = ref(123)
</script>

<template>
  <div>
   <h1>{{ txt }}</h1>
   <myInput v-model="txt"></myInput>
  </div>
</template>

<style scoped>
</style>
