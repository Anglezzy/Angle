var yonghu = document.getElementById('yonghu');
var zhanghu = document.getElementById('zhanghu');
var mima = document.getElementById('mima');
var denglu = document.getElementById('denglu');
var tishi = document.getElementById('tishi');
denglu.addEventListener('click', function() {
  var name = yonghu.value;
  var pwd = mima.value;
  var acc = zhanghu.value;
  tishi.innerHTML = '';
  tishi1.innerHTML = '';
  tishi2.innerHTML = '';
  if (name.length <= 4) {
    tishi.innerHTML = '提示:用户名的长度不能小于等于4个';
    return;
  }
  if (acc.length < 6) {
    tishi1.innerHTML = '提示:账户的长度不能小于6个';
    return;
  }
  if (pwd.length < 6) {
    tishi2.innerHTML = '提示:密码的长度不能小于6个';
    return;
  }
  tishi3.innerHTML = '欢迎' + name + '用户!';
});
