<template>
  <div>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from "@/components/index/Tab.vue";

export default {
  // 注册组件
  components: {
    tab
  }
};
</script>