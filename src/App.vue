<template>
  <div>
    <mt-header fixed title="喵喵电影"></mt-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="movie">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-dianying"></span>
        电影
      </mt-tab-item>
      <mt-tab-item id="cinema">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-yingyuana"></span>
        影院
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "movie"
    };
  },
  // 不管我们路由是什么，这个selected的默认值都是movie
  // 根据不同初始路由有不同的selected
  // 需要知道初始路由是什么？this.$route.path可以拿到当前路由
  // 根据初始路由的不同设置不同的selected
  
  created() {
    if (this.$route.path == "/index") {
      this.selected = "movie";
    } else if (this.$route.path == "/cinema") {
      this.selected = "cinema";
    }
  },
  watch: {
    selected(newVal, oldVal) {
      if (newVal == "movie" && this.$route.path != '/index') {
        this.$router.push({ path: "/index" });
      } else if (newVal == "cinema" && this.$route.path != '/cinema') {
        this.$router.push({ path: "/cinema" });
      }
    }
  }
};
</script>

<style>
.content {
  height: calc(100vh - 95px);
  margin-top: 40px;
}
</style>