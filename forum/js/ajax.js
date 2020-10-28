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
      data: Qs.stringify(data, { allowDots: true }),
      headers: {
        token: localStorage.getItem(huhuiyu.tokenKey),
      },
    });
    promise.then(function (resp) {
      if (resp.data.token) {
        localStorage.setItem(huhuiyu.tokenKey, resp.data.token);
      }
      // 越权访问api的固定code是1000,只要看见这个值就表示需要登录
      if (resp.data.code == 1000) {
        location.herf = '/ajax/ajax0004.html';
        return;
      }
      callback(resp.data);
    });
    // 请求发生错误的情况
    promise;
  },
  autoLogin: function (callback) {
    // callback就是自动登录完成之后要执行的function
    huhuiyu.ajax(
      '/user/login',
      {
        tbUser: { username: 'huhuiyu', password: 'abcd1234' },
      },
      function (data) {
        if (data.success) {
          // 登录成功就回调
          callback();
        } else {
          alert(data.message);
        }
      }
    );
  },
};
