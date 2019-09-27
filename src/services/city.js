import http from './api'

// 返回一个promise
function getCityList() {
    // 请求成功之后，把这个城市数据放到缓存中，下次再请求的时候，如果缓存中有数据就从缓存中拿，
    // 如果没有数据，就调用接口
    // 正常情况下缓存都会有过期时间的,这里不实现这个过期时间了。
    // 拓展的作业，自己封装缓存的模块，这里面的缓存有过期时间的设置。
    return new Promise((resolve, reject) => {
        let cityListStr = localStorage.getItem('cityList');
        if (cityListStr) {
            // 有缓存
            resolve(JSON.parse(cityListStr))
        } else {
            // 没有缓存
            http.get('/api/cityList').then(res => {
                localStorage.setItem('cityList', JSON.stringify(res));
                resolve(res);
            });
        }
    })

}

function getLocationCity() {
    return http.get('/api/getLocation')
}

export {
    getCityList,
    getLocationCity
}