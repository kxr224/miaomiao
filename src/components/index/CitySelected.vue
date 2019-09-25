<template>
  <div>城市</div>
</template>

<script>
import { getCityList } from "@/services/city";

export default {
  data() {
    return {
      cities: []
    };
  },
  created() {
    // 在我们真实的项目中，会对接口的调用进行封装
    //   this.axios.get('/api/cityList').then(res=>{
    //       ;
    //   });

    getCityList().then(res => {
      debugger;
    });
  }
};
</script>