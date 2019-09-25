/**
 * 如果传入的参数为空字符串，则返回true
 * @param {*} str 校验的字符串
 * @returns 如果传入的参数为空字符串，则返回true
 */
function isBlank(str) {
    return str === null || str === undefined || str === "";
}

function isNotBlank(str) {
    return !isBlank(str)
}

export {
    isBlank,
    isNotBlank
}