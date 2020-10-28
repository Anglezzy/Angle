console.log('进入ajax0006.js');

var btnGetUserInfo = document.getElementById('btnGetUserInfo');
btnGetUserInfo.addEventListener('click', function () {
  huhuiyu.ajax('post', '/user/getUserInfo', {}, function (resp) {
    console.log(resp);
    document.getElementById('divResult').innerHTML = JSON.stringify(resp);
  });
});
