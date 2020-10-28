var txtuesrname = document.getElementById('txtuesrname');
var txtpwd = document.getElementById('txtpwd');
var txtnickname = document.getElementById('txtnickname');
var btn01 = document.getElementById('btn01');
var div01 = document.getElementById('div01');
var param = {
  tbUser: { nickname: '', password: '', username: '' },
};
btn01.addEventListener('click', function () {
  param.tbUser.nickname = txtnickname.value;
  param.tbUser.password = txtpwd.value;
  param.tbUser.username = txtuesrname.value;
  ralap.ajax('post', '/user/reg', param, function (resp) {
    div01.innerHTML = JSON.stringify(resp.message);
  });
});
