var serviceBaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
var serciceTokenKey = 'service.token';
var promise = axios({
  method: 'post',
  url: serviceBaseUrl + '/',
  headers: {
    token: localStorage.getItem(serciceTokenKey),
  },
});
promise.then(function (resp) {
  console.log(resp.data);

  if (resp.data.token) {
    localStorage.setItem(serciceTokenKey, resp.data.token);
  }
});
var txtecho = document.getElementById('txtecho');
var btnecho = document.getElementById('btnecho');
var specho = document.getElementById('specho');
btnecho.addEventListener('click', function () {
  promise = axios({
    method: 'post',
    url: serviceBaseUrl + '/',
    headers: {
      token: localStorage.getItem(serciceTokenKey),
    },
    data: 'echo=' + txtecho.value,
  });
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(serciceTokenKey, resp.data.token);
    }
    specho.innerHTML = JSON.stringify(resp.data);
  });
});
