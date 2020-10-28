var btn01 = document.getElementById('btn01');
var btn02 = document.getElementById('btn02');
var div01 = document.getElementById('div01');
var btn03 = document.getElementById('btn03');

var divUser = document.getElementById('divUser');
var user = sessionStorage.getItem('login-user');
var btnLogout = document.getElementById('btnLogout');

var Num = 0;
btn01.addEventListener('click', function () {
  location.href = 'ajax01.html';
});

if (user) {
  divUser.innerHTML = '';
  btn02.classList.remove('dis');
  user = JSON.parse(user);
  var a = document.createElement('a');
  a.append('用户：' + user.nickname);
  divUser.append(a);
  a.setAttribute('href', 'ajax02.html');
}

btnLogout.addEventListener('click', function () {
  ralap.ajax('post', '/user/logout', {}, function (resp) {
    divUser.innerHTML = '';
    div01.classList.add('dis');
    btn02.classList.add('dis');
    var div = document.createElement('a');
    div.setAttribute('href', 'ajax01.html');
    div.innerHTML = '登录';
    divUser.append(div);
  });
});
var mode01 = 'one';
btn02.addEventListener('click', function () {
  if (mode01 == 'one') {
    mode01 = 'two';
    div01.classList.add('dis');
  } else {
    mode01 = 'one';
    div01.classList.remove('dis');
  }
});
var page = { pageNumber: 1, pageSize: 5 };
var secPost = document.getElementById('secPost');
function formatDate(time) {
  var date = new Date();
  date.setTime(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' + second
  );
}

function query() {
  ralap.ajax('post', '/post/queryAll', { page: page }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    secPost.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var postinfo = list[i];
      console.log(postinfo);
      var div = document.createElement('div');
      var div02 = document.createElement('div');
      var icon = document.createElement('i');
      icon.setAttribute('class', 'iconfont');
      div02.setAttribute('class', 'display');
      icon.innerHTML = '&#xe63d;';
      div02.append(icon);
      var line02 = document.createElement('div');
      line02.append(postinfo.user.nickname);
      div02.append(line02);
      div.append(div02);
      var line01 = document.createElement('div');
      line01.append(postinfo.title);
      div.append(line01);
      var line02 = document.createElement('div');
      line02.append(formatDate(postinfo.createDate));
      div.append(line02);
      var bor = document.createElement('div');
      bor.setAttribute('class', 'bor');
      div.append(bor);
      div.setAttribute('date-post-id', postinfo.postId);
      div.addEventListener('click', function () {
        var postId = this.getAttribute('date-post-id');
        console.log(postId);
        location.href = 'ajax05.html?postId=' + postId;
      });
      secPost.append(div);
    }
    page = data.resultData.page;
    spPage.innerHTML =
      page.pageNumber + '/' + page.pageCount + '/' + page.total;
  });
}
var btnPre = document.getElementById('btnPre');
var spPage = document.getElementById('spPage');
var btnNext = document.getElementById('btnNext');
function toPage() {
  page.pageNumber = txtPageNumber.value;
  query();
}

btnNext.addEventListener('click', function () {
  page.pageNumber++;
  query();
});

btnPre.addEventListener('click', function () {
  page.pageNumber--;
  query();
});
query();
