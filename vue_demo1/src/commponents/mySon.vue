<template>
  <div id="app">
    <div class="progress">
      <div class="inner" :style="{ width: percent + '%' }">
        <span>{{ percent }}%</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // 基础写法
  // props: {
  //   percent: Number
  // },
  props: {
    percent: {
      type: Number,
      // required: true, 是否为空
      default: 0, // 默认值
      validator(value) {
        // console.log(value);
        if (value >= 0 && value < 100) {
          return true
        } else {
          console.error('传入的值错误')
          return false
        }
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.progress {
  margin: 30px;
  width: 400px;
  height: 40px;
  background-color: #000;
  border-radius: 25px;
  padding: 3px;
}

.inner {
  width: 50%;
  height: 40px;
  border-radius: 25px;
  background-color: #409eff;
  text-align: right;
  position: relative;
  transition: all 1s;
}

.inner span {
  top: 100%;
  position: absolute;
}
</style>