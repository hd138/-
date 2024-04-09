<template>
  <table>
    <thead>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>年纪</td>
        <td>操作</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>
          <!-- 1. 给slot标签 添加属性的方式传值 -->
          <slot :row="item" msg="测试"></slot>
          <!-- 2. 会将所有的属性添加到一个对象中 -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style>
table {
  margin: 10px 0;
  border: 1px solid;
}

thead {
  background-color: blue;
  color: #fff;
}

td {
  padding: 10px;
  border: 1px solid;
  text-align: center;
}
</style>