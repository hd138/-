<template>
  <table>
    <thead>
      <tr>
        <slot name="head"></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import MyTag from './MyTag.vue'
export default {
  props: {
    data: {
      type: Array,
      requieed: true
    }
  },
  data() {
    return {
      // 测试组件功能
      bq: '茶壶',
      bq2: '111',
    }
  },
  components: {
    // MyTag
  }
}
</script>

<style scoped>
table {
  width: 700px;

}

thead {

  background-color: #F6F6F5;
  color: #000;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #87ABBC;
}

td {
  padding: 10px 0;
}

td img {
  width: 100px;
  height: 100%;
  object-fit: cover;
}

tbody tr {
  border-bottom: 1px solid #000;
  padding: 0 10px;
  text-align: center;
}
</style>