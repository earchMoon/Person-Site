/** 
  *   生成随机数字数组
  *   @param len 返回数组长度
  *   @param min,max 返回数组值区间
  *   return 数组
**/
function randomArr(len = 5, min = 0, max = 100) {
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
};

module.exports = {
    quickSort,
    randomArr
}