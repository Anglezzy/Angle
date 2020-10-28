console.log('自动登陆的测试');

huhuiyu.autoLogin(query);

function query() {
  console.log('自动登陆成功');
  huhuiyu.ajax('/user/getUserInfo', {}, function (data) {
    console.log('登陆的信息', data);
    alert(data.resultData.tbUser.nickname);
  });
}