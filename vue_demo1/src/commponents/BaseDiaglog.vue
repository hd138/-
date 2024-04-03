<template>
  <div v-show="visible" class="box">
    <div class="box1">
      <div class="box_head">
        <h3>温馨提示：</h3>
        <div @click="colse" class="close">X</div>
      </div>
      <div class="box_conter">你确定要退出本系统吗</div>
      <div class="box_footer">
        <button>确认</button>
        <button @click="colse">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    colse() {
      this.$emit('update:visible', false)
    }
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