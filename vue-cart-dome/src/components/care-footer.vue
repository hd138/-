<template>
  <div class="footer">
    共{{ total }}件商品，合计： <span>￥{{ totalPrice }}</span>
    <div class="btn">结算</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('care', ['total', 'totalPrice'])
  }
}
</script>

<style lang="less" scoped>
.footer{
  width:95%;
  height:60px;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 145px;
  display: flex;
  justify-content: end;
  align-items: center;
  span {
    color: #BC4B33;
  }
  .btn {
    width:  80px;
    height: 40px;
    background-color: #37AB82;
    border-radius: 60px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    margin-left: 30px;
  }
}

</style>
