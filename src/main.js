import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import './font/my-font/iconfont.css'
import './main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vuex from 'vuex'
// // 安装vuex
// Vue.use(Vuex);
import store from './store'

Vue.use(VueAxios, axios);
Vue.filter('handleImg', function (data, size) {
    if (size) {
        return data.replace('w.h', size)
    } else {
        // 使用默认尺寸
        return data.replace('w.h', '150.300')
    }
})

// 安装路由
Vue.use(VueRouter)
Vue.use(mintUI)



// this.$store.state.count

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})