var divUser = document.getElementById('divUser');
var user = sessionStorage.getItem('login-user');
if (user) {
  user = JSON.parse(user);
  console.log('登录的用户信息：', user);
  divUser.innerHTML = '欢迎用户：' + user.nickname;
}

