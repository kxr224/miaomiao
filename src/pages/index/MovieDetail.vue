<template>
  <div>
      <h3>标题：{{movieDetail.nm}}</h3>
      <p>
          描述：
          {{movieDetail.dra}}
      </p>
      <img :src="movieDetail.img | handleImg('800.800')" alt="">
  </div>
</template>
<script>
import { detail } from "@/services/movie";
export default {
  data() {
      return {
          movieDetail:{}
      }
  },
  created() {
    detail(this.$route.params.movieId).then(res => {
      this.movieDetail = res;
    });
  }
};
</script>
<style lang="less">
</style>