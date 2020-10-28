var txtuesrname = document.getElementById('txtuesrname');
var txtpwd = document.getElementById('txtpwd');
var div01 = document.getElementById('div01');
var btnsp = document.getElementById('btnsp');
var param = { tbUser: { password: '', username: '' } };
btnsp.addEventListener('click', function () {
  param.tbUser.username = txtuesrname.value;
  param.tbUser.password = txtpwd.value;
  ralap.ajax('post', '/user/login', param, function (resp) {
    div01.innerHTML = JSON.stringify(resp.message);
    if (resp.success) {
      div01.innerHTML = '登录成功';
      console.log(resp.resultData.tbUser);
      sessionStorage.setItem(
        'login-user',
        JSON.stringify(resp.resultData.tbUser)
      );
      location.href = 'qinwang26.html';
    }
  });
});
