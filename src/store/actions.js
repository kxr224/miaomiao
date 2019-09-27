import {
    getLocationCity
} from '@/services/city'

export default {
    // context state、commit、dispatch、getter、rootState,rootGetter
    setLocationCity(context) {
        // 调用封装好的异步操作
        getLocationCity().then(res => {
            // 拿到数据之后，这只当前城市
            context.commit('changeCity', {
                city: res.data
            })
        })
    }
}