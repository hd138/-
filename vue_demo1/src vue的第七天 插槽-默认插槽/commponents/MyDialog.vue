<template>
  <div class="box">
    <div class="head">
      友情提示
      <span>X</span>
    </div>
    <div class="conter">
      <!-- 1.在需要定制的位置使用slot占位 -->
      <slot>我是默认内容</slot>
    </div>
    <div class="fooer">
      <button>取消</button>
      <button>确认</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box {
  width: 300px;
  height: 150px;
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
}

.head {
  height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
}

.head span {
  cursor: pointer;
}

.conter {
  height: 50px;
  padding: 10px 0;

}

.fooer {
  height: 30px;
  display: flex;
  justify-content: end;
}

button {
  margin: 0 3px;
}
</style>