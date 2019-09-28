// 这个模块封装了所有对城市请求
import http from './api';

// 输入 cityId
// 输出一个Promise,通过Promise对象能拿到正在热映的数据
/**
 * 获取正在热映的电影列表
 * @param {*} cityId 城市id
 * @return 这个城市正在热映的电影列表 [movie列表] 
 */
function getHotPlayMovieList(cityId) {
    // return new Promise((resolve, reject) => {
    // 发送get请求获取电影列表
    return http.get(`/api/movieOnInfoList?cityId=${cityId}`).then(res => {
        // 直接把这个数据返回给调用方
        // return res
        // 把调用方需要的数据返回给调用方
        return res.data.movieList
    })
    // })
}


/**
 * 获取正在热映的电影列表
 * @param {*} cityId 城市id
 * @return 这个城市正在热映的电影列表 [movie列表] 
 */
function getMovieComingList(cityId) {
    // return new Promise((resolve, reject) => {
    // 发送get请求获取电影列表
    return http.get(`/api/movieComingList?cityId=${cityId}`).then(res => {
        // 直接把这个数据返回给调用方
        // return res
        // 把调用方需要的数据返回给调用方
        return res.data.comingList
    })
    // })
}

// 输入 电影id
// 输出Promise对象 电影的详细信息
function detail(movieId) {
    return http.get(`/api/detailmovie?movieId=${movieId}`).then(res => {
        return res.data.detailMovie;
    })
}

export {
    getHotPlayMovieList,
    getMovieComingList,
    detail
}