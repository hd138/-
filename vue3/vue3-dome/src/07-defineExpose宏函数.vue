<script setup>
import { onMounted, ref } from 'vue'
import testComVue from './components/test-com.vue'

// 模板引用（可以获取dom，也可以获取组件）
// 1. 调用ref函数，生成一个ref对象
// 2. 通过ref标识，进行绑定
// 3. 通过ref对象.value即可访问到绑定的元素（必须渲染完之后才能访问）

const inp = ref(null)

// 生命周期钩子
onMounted(()=>{
  console.log(inp);
})

const clickFn = () => {
  inp.value.focus()
}

const testRef = ref(null)

const getCom = () => {
  console.log(testRef.value.count);
  testRef.value.sayHi()
}

</script>

<template>
  <div>
    <input ref="inp" type="text">
    <button @click="clickFn">点击让输入框聚焦</button>
    <testComVue ref="testRef"></testComVue>
    <button @click="getCom">获取组件</button>
  </div>
</template>

<style scoped>
</style>
