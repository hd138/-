<template>
  <div class="body">
    <div class="img">
      <img :src="item.image" alt="">
    </div>
    <div class="text">
      <div class="textTitle">{{ item.name }}</div>
      <div class="textCount">
        <div class="count">￥{{ item.Price }}</div>
        <div class="btn">
          <button @click="btnClick(-1)">-</button>
          <span>{{ item.count }}</span>
          <button @click="btnClick(+1)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  },
  methods: {
    btnClick (num) {
      const newcount = this.item.count + num
      const id = this.item.id
      if (newcount < 1) { return }
      this.$store.dispatch('care/updateCount', {
        id,
        newcount
      })
    }
  }

}
</script>

<style lang="less" scoped>
.body {
  width: 90%;
  height: 100px;
  padding: 5%;
  border: 1px solid #ccc;
  display: flex;
  .img {
    width: 100px;
    height: 100%;
    border: 1px solid;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .textTitle{
      height: 70%;
      font-weight: bold;
    }
    .textCount {
      width: 240px;
      height: 30%;
      display: flex;
      justify-content: space-between;
      .count{
        color:#BC4B33;
      }
      .btn {
        span {
          margin:0 10px;
        }
      }
    }
  }
}
</style>
