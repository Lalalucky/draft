



export function setLocalStorage(key,value){
    var curTime = new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}

export function getLocalStorage(key,exp){
    var data = localStorage.getItem(key);
    // console.log(data)
    if (data == null) {
        return -1;
    } else {
        var dataObj = JSON.parse(data);
        var nowTime = new Date().getTime();
        // console.log(dataObj)
        // console.log(exp)
        // console.log(nowTime)
        if (nowTime - dataObj.time > exp) {
        console.log('过期')
            return -1;
        } else {
        //   console.log('未过期')
            return dataObj.data;
        }
    }
}

// 转化为数组
export function toArr(s){
    try{
        return Array.prototype.slice.call(s);
    }catch(e){
        var arr = [];
        for (var index = 0; index < s.length; index++) {
            arr[index] = s[index];
        }
        return arr;
    }
}

