console.log('进入ajax0004.js');

var txtname = document.getElementById('txtname');
var txtpwd = document.getElementById('txtpwd');
var btnLogin = document.getElementById('btnLogin');
var divResult = document.getElementById('divResult');

var param = { tbUser: { password: '', username: '' } };
btnLogin.addEventListener('click', function () {
  param.tbUser.username = txtname.value;
  param.tbUser.password = txtpwd.value;
  huhuiyu.ajax('post', '/user/login', param, function (resp) {
    divResult.innerHTML = JSON.stringify(resp);
    // 提取服务返回的用户信息
    if (resp.success) {
      console.log(resp.resultData.tbUser);
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'ajax0005.html';
    }
  });
});
