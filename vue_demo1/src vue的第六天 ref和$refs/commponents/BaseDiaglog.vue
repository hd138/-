<template>
  <div class="base_box" ref="myBox">
    我是子组件的盒子
  </div>
</template>

<script>
export default {

  mounted() {
    const myBox = this.$refs.myBox
    myBox.innerHTML = '我是子组件'
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.box1 {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: #fff;
}

.close {
  border: 1px solid;
  cursor: pointer;
}

.box_head {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box_conter {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>