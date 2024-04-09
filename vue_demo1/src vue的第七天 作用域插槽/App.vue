<template>
  <div id="app">
    <MyTable :list="list">
      <template #default="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>
    <MyTable :list="list2">
      <template #default="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './commponents/MyTable.vue'



export default {
  name: 'App',
  data() {
    return {
      list: [
        { id: 1, name: '张三', age: 14 },
        { id: 2, name: '里斯', age: 15 },
        { id: 3, name: '王五请', age: 19 }
      ],
      list2: [
        { id: 1, name: '张小花', age: 21 },
        { id: 2, name: '刘德华', age: 15 },
        { id: 3, name: '装学友', age: 17 }
      ],
    }
  },

  components: {
    MyTable
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    show(item) {
      console.log(item);
      alert(`姓名：${item.name} , 年纪：${item.age}`)
    }
  },

}
</script>

<style lang="less"></style>
