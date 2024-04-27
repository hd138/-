<template>
  <div class="derail" v-if="item.id">

    <div class="head">
      <div class="fhbtn" @click="$router.back()"> 返回 </div>
      <div class="head_title">面经详情</div>
    </div>
    <header>
      <div class="mian">
        <div class="title">{{ item.stem }}</div>
        <div class="mian_body">{{ item.createdAt }} | 点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
        <div class="foot">
          <img :src="item.creatorAvatar" alt="">
          <span>{{ item.creatorName }}</span>
        </div>
      </div>
    </header>
    <main class="body">
      {{ item.content }}
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      item: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    const res = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    this.item = res.data.result
  }
}
</script>

<style>
.head {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

.fhbtn {
  left: 0;
  position: absolute;
}

.head_title {
  text-align: center;
}

.mian {
  width: 100%;
  min-height: 100px;

}

.mian .title {
  font-weight: bold;
  font-size: 30px;
  color: #000;
  margin: 20px 0;
}

.mian_body {
  color: #ccc;
  font-size: 14px;
}

.foot {
  display: flex;
  align-items: center;
}

.foot img {
  width: 50px;
  height: 50px;
  object-fit: cover;

}
</style>