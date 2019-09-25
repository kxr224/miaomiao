import VueRouter from 'vue-router'

import index from './pages/index/index.vue';
import cinema from './pages/cinema/cinema.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        },{
            path: '/index',
            component: index,
            meta: {
                title: '电影'
            }
        }, {
            path: '/cinema',
            component: cinema,
            meta: {
                title: '影院'
            }
        }
    ]
})

export default router;