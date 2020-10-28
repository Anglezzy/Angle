var btnOK = document.getElementById('btnOk');
var divMessage = document.getElementById('divMessage');
var inpName = document.getElementById('inpName');
var inpPwd = document.getElementById('inpPwd');
var param = { tbUser: { password: '', username: '' } };
btnOK.addEventListener('click', function () {
  ralap.ajax('post', '/user/login', param, function (data) {
    console.log(data);
    param.tbUser.username = inpName.value;
    param.tbUser.password = inpPwd.value;
    var name = inpName.value;
    inpPwd.classList.remove('error');
    inpName.classList.remove('error');
    if (!name) {
      divMessage.innerHTML = JSON.stringify(data.message);
      divMessage.classList.add('message');
      setTimeout(function () {
        divMessage.classList.remove('message');
      }, 5000);
      inpName.classList.add('error');
      inpName.focus();
      return;
    }
    var pwd = inpPwd.value;
    if (!inpPwd.value) {
      divMessage.innerHTML = JSON.stringify(data.message);
      divMessage.classList.add('message');
      setTimeout(function () {
        divMessage.classList.remove('message');
      }, 5000);
      inpPwd.classList.add('error');
      inpPwd.focus();
      return;
    }
  });
});
