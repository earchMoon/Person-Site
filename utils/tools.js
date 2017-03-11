/**
 *   生成随机数字数组
 *   @param len 返回数组长度
 *   @param min,max 返回数组值区间
 *   return 数组
 **/
function randomArr(len = 10, min = 0, max = 61) {
    let _arr = [];
    let obj = {};

    while (_arr.length < len) {
        let num = Math.floor(Math.random() * (max - min) + min);
        if (!obj[num]) {
            _arr.push(num);
            obj[num] = 1;
        }
    }
    return _arr;
}


/**
 *   数组快速排序
 *   @param arr 排序数组
 *   return 数组
 **/
function quickSort(arr) {
    //如果数组长度小于等于1无需判断直接返回即可
    if (arr.length <= 1) {
        return arr;
    }

    let midIndex = Math.floor(arr.length / 2);//取基准点
    let midIndexVal = arr.splice(midIndex, 1);//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]
    let left = [];//存放比基准点小的数组
    let right = [];//存放比基准点大的数组
    //遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midIndexVal) {
            left.push(arr[i]);//比基准点小的放在左边数组
        }
        else {
            right.push(arr[i]);//比基准点大的放在右边数组
        }
    }
    //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
    return quickSort(left).concat(midIndexVal, quickSort(right));
}

/**
 *   获取浏览器类型和版本
 *   @param userAgent 浏览器userAgent属性
 *   return Object
 **/
function getExplore(userAgent) {
    let Sys = {}, ua = userAgent.toLowerCase(), s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
        (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (Sys.ie) return {type: 'IE', versions: Sys.ie};
    if (Sys.edge) return {type: 'EDGE: ', versions: Sys.edge};
    if (Sys.firefox) return {type: 'Firefox: ', versions: Sys.firefox};
    if (Sys.chrome) return {type: 'Chrome: ', versions: Sys.chrome};
    if (Sys.opera) return {type: 'Opera: ', versions: Sys.opera};
    if (Sys.safari) return {type: 'Safari: ', versions: Sys.safari};
    return {
        type: false
    };
}

module.exports = {
    quickSort,
    randomArr,
    getExplore
};
