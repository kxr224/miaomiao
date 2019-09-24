import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import './font/my-font/iconfont.css'
import './main.css'


// 安装路由
Vue.use(VueRouter)
Vue.use(mintUI)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})