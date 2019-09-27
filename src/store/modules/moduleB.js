export default {
    state: {
        bMsg: '模块a的msg'
    },
    mutations: {
        changeBMsg(state, payload) {
            state.bMsg = payload.msg;
        }
    }
}