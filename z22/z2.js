var imgcode = document.getElementById('imgcode');
var btncode = document.getElementById('btncode');
var serviceBaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
var tokenKey = 'token';
btncode.addEventListener('click', function () {
  var promise = axios({
    method: 'get',
    url: serviceBaseUrl + '/test/imageCode',
    headers: {
      token: localStorage.getItem(tokenKey),
    },
  });
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(tokenKey, resp.data.token);
    }
    console.log(resp.data);
    imgcode.setAttribute('src', resp.data.message);
  });
});
