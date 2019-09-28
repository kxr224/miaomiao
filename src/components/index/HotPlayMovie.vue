<template>
  <div>
    <ul class="movie-list">
      <li v-for="movie in movieList" :key="movie.id">
        <div class="left">
          <div>
            <img :src="movie.img | handleImg" :alt="movie.nm" />
          </div>
          <div class="movie-info">
            <h3 @click="detail(movie.id)">{{movie.nm}}</h3>
            <p>
              观众评：
              <span :style="getStyle(movie.sc)">{{movie.sc}}</span>
            </p>
            <p>主演：{{movie.star}}</p>
            <p>{{movie.showInfo}}</p>
          </div>
          <div class="version">
            <p v-if="movie.version">3DMax</p>
          </div>
        </div>
        <div class="right">
          <mt-button size="small" type="danger">购票</mt-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getHotPlayMovieList } from "@/services/movie";

export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    // 在这里请求数据
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      getHotPlayMovieList(this.selectedCity.id).then(res => {
        this.movieList = res;
      });
    },
    getStyle(scope) {
      let color = "red";
      if (scope < 6) {
        color = "red";
      } else if (scope < 8) {
        color = "#ffc107";
      } else if (scope < 9) {
        color = "blue";
      } else {
        color = "green";
      }
      return { color, "font-size": "14px" };
    },
    detail(movieId) {
      this.$router.push({
        path: `/movie/detail/${movieId}`
      });
    }
  },
  computed: {
    selectedCity() {
      return this.$store.state.selectedCity;
    }
  },
  watch: {
    "selectedCity.id"(newVal) {
      this.getMovieList();
    }
  }
};
</script>

<style lang="less" scoped>
.movie-list {
  li {
    display: flex;
    padding: 10px;
    justify-content: space-between;

    .left {
      display: flex;
      flex: 1;
      img {
        width: 60px;
      }
      .movie-info {
        padding: 0 10px;
        width: calc(100% - 125px);
        h3 {
          margin: 0;
          font-size: 14px;
        }
        p {
          margin: 0;
          font-size: 12px;
          color: #888;
          margin-top: 5px;
        }
      }
      .version {
        font-size: 14px;
      }
    }
    .right {
      width: 40px;
      display: flex;
      align-items: center;
      min-width: 40px;
    }
  }
  .mint-button--small {
    display: inline-block;
    font-size: 12px;
    padding: 0 12px;
    height: 25px;
    padding: 0 8px;
  }
}
</style>