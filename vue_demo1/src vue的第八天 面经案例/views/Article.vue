<template>
  <div class="page">
    <!-- <div @click="$router.push(`/articleDerail?id=${item.id}`)" class="page_box" v-for="(item) in list" :key="item.id"></div> -->
    <div @click="$router.push(`/articleDerail/${item.id}`)" class="page_box" v-for="(item) in list" :key="item.id">
      <img :src="item.creatorAvatar" alt="">
      <div class="con">
        <span class="title">{{ item.stem }}</span>
        <span class="other">{{ item.creatorName }} | {{ item.createdAt }}</span>
      </div>
      <div class="body">{{ item.content }}</div>
      <div class="foot">点赞{{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleD',
  data() {
    return {
      list: []
    }
  },
  //  https://mock.boxuegu.com/mock/3083/articles
  async created() {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.list = res.data.result.rows
    // console.log(this.list);
  }
}
</script>

<style scoped>
.page {
  max-height: 600px;
  width: 100%;
  background-color: #F4F4F4;
  overflow: auto;
}

.page_box {
  height: 145px;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 10px;
  position: relative;

}

.page_box img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.con {
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}

.con .other {
  color: #ccc;
  font-size: 14px;
}

.body {
  max-height: 60px;
  color: rgb(147, 145, 145);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin: 10px 0;
}

.foot {
  color: rgb(147, 145, 145);
  font-size: 14px;
  margin-top: 5px;
}
</style>