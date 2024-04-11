<template>
  <div id="app">
    <MyTable :data="list">
      <template #head>
        <td>编号</td>
        <td>图片</td>
        <td>名称</td>
        <td>标签</td>
      </template>
      <template #body="obj">
        <td>{{ obj.index + 1 }}</td>
        <td><img src="https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.png" alt=""></td>
        <td>{{ obj.item.name }}</td>
        <td>
          <!-- <MyTag @handlchun="handlchun2" :bq="bq"></MyTag> -->
          <MyTag v-model="obj.item.tag"></MyTag>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './commponents/MyTable.vue'
import MyTag from './commponents/MyTag.vue';

export default {
  name: 'App',
  data() {
    return {
      // 测试组件功能
      // bq: '茶壶',
      // bq2: '111',
      list: [
        { id: 1, name: '张三', age: 14, tag: '茶壶' },
        { id: 2, name: '里斯', age: 15, tag: '男鞋' },
        { id: 3, name: '王五请', age: 19, tag: '儿童服饰' }
      ],
    }
  },

  components: {
    MyTable,
    MyTag
  },
  methods: {
    // handlchun2(id) {
    //   this.bq = id
    // }
  },

}
</script>

<style lang="less"></style>
