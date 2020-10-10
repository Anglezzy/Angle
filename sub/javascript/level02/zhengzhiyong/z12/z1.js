console.log('进入z1.js');

var yhm = document.getElementById('yhm');
var mima = document.getElementById('mima');
var nansex = document.getElementById('nansex');
var nvsex = document.getElementById('nvsex');
var btnOk = document.getElementById('btnOk');
var divInfo = document.getElementById('divInfo');
var divInfo2 = document.getElementById('divInfo2');

console.log(yhm, mima, nansex, nvsex, btnOk, divInfo);

btnOk.addEventListener('click', function() {
  console.log('点击确定事件');
divInfo.innerHTML = '用户名是:' + yhm.value;
var mode = ''
});

btnOk.addEventListener('click', function() {
  console.log('点击确定事件');
divInfo2.innerHTML = '密码是:' + mima.value;

if (nansex.checked) {
  mode = nansex.value;
}
if (nvsex.checked) {
  mode = nvsex.value;
}

divInfo2.innerHTML += '<br>性别是:' + mode;
});

















