console.log('进入ajax.js');
console.log('校验基本对象导入', axios, Qs);
// 自定义对象，方便后面的js使用
var ralap = {
  serviceBaseUrl: 'https://huhuiyu.cn/teach-ajax-demo',
  tokenKey: 'top.huhuiyu.token',
  // method,请求的方法(post,get)
  // url，服务器api的path
  // data，发送给服务器的数据
  // callback是应答回来之后要执行发function
  ajax: function (method, url, data, callback) {
    console.log('ajax请求');
    var promise = axios({
      method: method,
      url: ralap.serviceBaseUrl + url,
      data: Qs.stringify(data, { allowDots: true }),
      headers: {
        token: localStorage.getItem(ralap.tokenKey),
      },
    });
    promise.then(function (resp) {
      if (resp.data.token) {
        localStorage.setItem(ralap.tokenKey, resp.data.token);
      }
      callback(resp.data);
    });
  },
};
