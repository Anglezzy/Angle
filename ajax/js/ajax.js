console.log('进入ajax.js');
console.log('校验基本的对象导入', axios, Qs);
// 自定义对象，方便后面的js使用
var huhuiyu = {
    serviceBaseUrl: 'https://huhuiyu.cn/teach-ajax-demo',
    tokenKey: 'huhuiyu.top.token',
    // method, 请求的方式(post,get)
    // url, 服务器api的path
    // data, 发送给服务器的数据
    // callback是应答回来之后要执行的function
    ajax: function (method, url, data, callback) {
        console.log('ajax请求');
        var promise = axios({
            method: method,
            url: huhuiyu.serviceBaseUrl + url,
            data: Qs.stringify(data, { allowDots: true}),
            headers: {
                token: localStorage.getItem(huhuiyu.tokenKey)
            }
        });
        promise.then(function (resp) {
            if (resp.data.token) {
                localStorage.setItem(huhuiyu.tokenKey, resp.data.token);
            }
            callback(resp.data);
        });
    }
};
