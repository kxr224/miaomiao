<template>
  <div>
    <mt-index-list>
      <div class="hot-city">
        <!-- <p class="hot-city-title">热门城市</p> -->
        <p class="hot-city-title">热门城市</p>
        <ul class="hot-city-list">
          <li @click="changeCity(city)" v-for="city in hotCities" :key="'hot-city'+city.id">
            <p>{{city.nm}}</p>
          </li>
        </ul>
      </div>
      <!-- <mt-index-section v-for="(value,key) in cityObj" :index="key" :key="key">
        <mt-cell v-for="city in value" :title="city.nm" :key="'list'+city.id"></mt-cell>
      </mt-index-section>-->
      <mt-index-section v-for="key in Object.keys(cityObj).sort()" :index="key" :key="key">
        <div @click="changeCity(city)" v-for="city in cityObj[key]" :key="'list'+city.id">
          <mt-cell :title="city.nm"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import { getCityList } from "@/services/city";
import { mapState } from "vuex";

export default {
  created() {
    // 在我们真实的项目中，会对接口的调用进行封装
    //   this.axios.get('/api/cityList').then(res=>{
    //       ;
    //   });
    // const mapStateObj =
    // debugger;
    getCityList().then(res => {
      this.cities = res.data.cities;
    });
  },
  data() {
    return {
      cities: []
      // message: this.$store.state.message,
      // msg: store.state.message
    };
  },
  methods: {
    changeCity(city) {
      this.$store.commit({
        type: "changeCity",
        city
      });
    }
  },
  // 热门城市的数据是，城市列表过滤得到的，这个时候可以通过计算属性实现
  computed: {
    hotCities() {
      // 1. 数组提供的filter
      // 2. 创建一个新的数组，遍历cities,把满足条件的数据插入到新的数组中
      return this.cities.filter(city => {
        return city.isHot === 1;
      });
    },
    cityObj() {
      //{
      // 	B:[
      // 			{
      //       	"id": 1,
      //         "nm": "北京",
      //         "isHot": 1,
      //         "py": "beijing"
      // 			}
      //   ],
      //   C:[
      //   ]
      // }
      const cityObj = {};
      this.cities.forEach(item => {
        // 首先拿到首写字母
        // 看这个对象中是否有这个首写字母的key
        // 如果没有添加一个，给这个key初始的数组
        // 如果有的话，直接给数组push这个城市就行
        let firstChar = item.py.charAt(0).toUpperCase();
        if (cityObj[firstChar]) {
          // 已经存在这个key
          cityObj[firstChar].push(item);
        } else {
          // 这个key还不存在
          cityObj[firstChar] = [item];
          // cityObj[firstChar].push(item);
        }
      });
      // 对象里key是无序的,但是我们想要的是一个有序的列表
      // 数组有序的
      // 对象的所有的key可以作为数组，在这个数组中排序
      // 通过对象和key就可以拿到对象值
      console.log(Object.keys(cityObj).sort());
      return cityObj;
    }
  }
};
</script>

<style lang="less" scoped>
// less可以定义变量
@bgc: #f8f3ed;

.hot-city {
  // 热门城市标题样式
  .hot-city-title {
    margin: 0;
    padding: 10px;
    background-color: #fafafa;
  }
  // 热门城市列表样式
  .hot-city-list {
    display: flex;
    // flex 默认不换行
    flex-wrap: wrap;
    text-align: center;
    background-color: @bgc;
    li {
      width: 33%;
      p {
        margin: 10px auto;
        border: 1px solid #e3e3e3;
        width: 80%;
        padding: 5px;
        border-radius: 5px;
        background-color: #fff;
      }
    }
  }
}
.mint-cell {
  background-color: @bgc;
}

.mint-cell-title {
  font-size: 22px;
}
</style>