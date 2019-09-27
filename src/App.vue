<template>
  <div>
    <mt-header fixed :title="title"></mt-header>
    <div class="content">
      <transition name="app-router" mode="out-in">
        <router-view></router-view>
      </transition>
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
import { isNotBlank } from "./utils/commen-util";

export default {
  data() {
    return {
      selected: "movie",
      title: "喵喵电影"
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
    // 调用获取当地信息的action
    this.$store.dispatch("setLocationCity");
  },
  watch: {
    selected(newVal, oldVal) {
      if (newVal == "movie" && this.$route.path != "/index") {
        this.$router.push({ path: "/index" });
      } else if (newVal == "cinema" && this.$route.path != "/cinema") {
        this.$router.push({ path: "/cinema" });
      }
    },
    $route(newVal, oldVal) {
      // 如果没有配置这个标题，还显示原来的标题
      if (isNotBlank(newVal.meta.title)) {
        this.title = newVal.meta.title;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.content {
  height: calc(100vh - 95px);
  margin-top: 40px;
  width: 100%;
  overflow-x: hidden;
}
.app-router-enter,
.app-router-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.app-router-leave-to {
  transform: translateX(-100%);
}

.app-router-enter-active,
.app-router-leave-active {
  transition: all 0.4s ease;
}
</style>