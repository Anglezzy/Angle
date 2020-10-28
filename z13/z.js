console.log('执行z.js');

var txtUsername = document.getElementById('txtUsername');
var btnOk = document.getElementById('btnOk');

var txtPwd = document.getElementById('txtPwd');
var divInfo = document.getElementById('divInfo');
var btnOk = document.getElementById('btnOk');
//radio 一组互斥
var rdoYue = document.getElementById('rdoYue');
var rdoNian = document.getElementById('rdoNian');
var rdoYJ = document.getElementById('rdoYJ');

console.log(txtPwd, divInfo, btnOk, rdoYue, rdoNian, rdoYJ);

btnOk.addEventListener('click', function() {
  console.log('点击确定事件');
  divInfo.innerHTML = '请输入密码:' + txtPwd.value;
  //判断开卡模式(radio互斥效果的判断)
  var mode = '';
  //radio的checked属性只有真假二态，选中时为true
  if (rdoYue.checked) {
    mode = rdoYue.value;
  }
  if (rdoNian.checked) {
    mode = rdoNian.value
  }
  if (rdoYJ.checked) {
    mode = rdoYJ.value
  }
  divInfo.innerHTML += '<br>开年卡模式是:' + mode;
});

var chkShow = document.getElementById('chkShow');
var spShow = document.getElementById('spShow');

chkShow.addEventListener('click', function() {
 if (chkShow.checked) {
//如果是选中状态就显示spShow
spShow.style.display = 'inline';
 } else {
  spShow.style.display = 'none';
 }
});
var btnOk = document.getElementById('btnOk');
var ah01 = document.getElementById('ah01');
var ah02 = document.getElementById('ah02');
var ah03 = document.getElementById('ah03');
var ah04 = document.getElementById('ah04');
var spInfo = document.getElementById('spInfo');
var chkXy = document.getElementById('chkXy');

console.log(btnOk, ah01, ah02, ah03, ah04, spInfo);

btnOk.addEventListener('click', function() {
  console.log('点击确定按钮==>');
  if (!chkXy.checked) {
    spInfo.innerHTML = '必须同意用户隐私协议';
    return;
  }
  var ah = '你的爱好有:';
  if (ah01.checked) {
    ah += ah01.value + ',';
  }
  if (ah02.checked) {
    ah += ah02.value + ',';
  }
  if (ah03.checked) {
    ah += ah03.value + ',';
  }
  if (ah04.checked) {
    ah += ah04.value + ',';
  }
  //如果不是初始值，表示有选择爱好
  if (ah != '你的爱好有:') {
    //substr是字符串对象的特有方法，获取字符串的一部分
    //substr(开始索引，长度)
    ah = ah.substr(0, ah.length - 1);
  }
  spInfo.innerHTML = ah;
});

//============================================
var xb = document.getElementById('xb');
console.log(xb);
xb.addEventListener('click', function() {
  spInfo.innerHTML = '性别是:' + xb.value;
});
console.log(txtUsername, btnOk);
var attr = txtUsername.getAttribute('id');
console.log(attr);
attr = txtUsername.getAttribute('placeholder');
console.log(attr);

btnOk.addEventListener('click', function() {
  console.log('确定按钮点击');
  var username = txtUsername.value;
  username = username.replace(/\s/g, '');
  console.log('用户名:', username);
  if (username.length < 8) {
    spInfo.innerHTML = '长度不能小于8';
    txtUsername.focus();
    return;
  }
  if (username.length > 20) {
    spInfo.innerHTML = '长度不能大于20';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});









