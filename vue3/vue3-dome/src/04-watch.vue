<script setup>
import { ref, watch } from 'vue';
  const count = ref(0)
  const nickName = ref('张三')
  const chageCount = () => {
    count.value++
  }
  const changeName = () => {
    nickName.value = '李四'
  }

  // 监视单个数据的变化
  //    watch(ref对象，(newValue， oldValue) => {...})
  // watch(count, (newvalue, oldValue) => {
  //   console.log(newvalue, oldValue);
  // })

  // 监视多个数据的变化
  // watch([ref对象1, ref对象2], (newArr, oldArr) => {....})
  // watch([count, nickName], (newArr, oldArr) => {
  //   console.log(newArr, oldArr)
  // })

  // immediare 立刻执行
  //  watch(count, (newvalue, oldValue) => {
  //   console.log(newvalue, oldValue);
  // }, {
  //   immediate: true
  // })

  // deep深度监视， 默认watch进行的是浅层监视
  // const ref1 = ref(简单类型) 可以直接监视
  // const ref2 = ref(复杂数据类型) 监视不到复杂类型内部数据的变化

  const userInfo = ref({
    name: '张三',
    age: 18
  })
  // const changeUserInfo = () => {
    // 修改了userInfo.value 修改了对象的地址，才能监视到
  //   userInfo.value = {name: 'ls', age: 19}
  // }

  const changeUserInfo = () => {
    userInfo.value.name = '李四'
    userInfo.value.age++
  }

  // deep深度监视
  // watch(userInfo, (newValue) => {
  //   console.log(newValue);
  // }, {
  //   deep: true
  // })

  // 对于对象中的属性， 进行监视
  watch(() => userInfo.value.age, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  })
</script>

<template>
  <div>
   <p>{{ count }}</p>
   <button @click="chageCount">改数字</button>
   <p>{{ nickName }}</p>
   <button @click="changeName">改昵称</button>
   <div>--------------------------</div>
   <p>{{ userInfo.name }}</p>
   <p>{{ userInfo.age }}</p>
   <button @click="changeUserInfo">修改userInfo</button>
  </div>
  
</template>

<style scoped>
</style>
