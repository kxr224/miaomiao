<template>
  <div>
    <ul class="tab-list">
      <li>
        <!-- <router-link to="/index/city" tag="p">城市</router-link> -->
        <router-link to="/index/city" tag="p">{{state.message}}</router-link>
      </li>
      <li>
        <router-link to="/index/hot-play-movie" tag="p">正在热映</router-link>
      </li>
      <li>
        <router-link to="/index/will-movie" tag="p">即将上映</router-link>
      </li>
      <li>
        <router-link to="/index/search" tag="p">
          <span class="iconfont icon-guanbi"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/simple-store";

export default {
  data() {
    return {
      state: store.state,
      msg: store.state.message
    };
  }
};
</script>

<style lang="less" scoped>
.tab-list {
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  li {
    width: 25%;
    text-align: center;
    padding: 0 0.25rem;
  }

  p {
    margin: 0;
    padding: 0.7rem 0;
  }
  .router-link-active {
    color: red;
    border-bottom: 0.1rem solid red;
  }
}
</style>