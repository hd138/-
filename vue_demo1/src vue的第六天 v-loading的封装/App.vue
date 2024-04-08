<template>
  <div id="app">
    <div class=" div" v-loading="isLoading">
      <div v-for="(item) in list" :key="item.id" class="box ">
        <div class="span">
          <span>{{ item.title }}</span>
          <span>{{ item.source }}{{ item.time }}</span>
        </div>
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      list: [],
      isLoading: true
    }
  },
  directives: {
    loading: {
      inserted(el, binding) {

        binding.value ? el.classList.add('acyive') : el.classList.remove('acyive')
      },
      update(el, binding) {
        binding.value ? el.classList.add('acyive') : el.classList.remove('acyive')
      }
    }

  },
  // mounted() {
  //   this.$refs.inp.focus()
  // },
  async created() {
    // 发送请求,请求数据
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    // 将数据更新给data中搞得list
    this.list = res.data.data
    this.isLoading = false
    console.log(res.data.data);
  },


  components: {

  },
  methods: {

  },

}
</script>

<style lang="less">
.box {
  width: 500px;
  min-height: 200px;
  display: flex;

}

.div {
  position: relative;
}



.span {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  width: 35%;
  object-fit: cover;
}

.acyive::before {
  content: 'loading';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid;
  background-color: pink;
}
</style>
