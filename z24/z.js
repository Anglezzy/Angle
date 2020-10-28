console.log('论坛首页js');
var page = { pageNumber: 1, pageSize: 2 };
var secPost = document.getElementById('secPost');
function formatData(time) {
  var date = new Date();
  date.setTime(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second
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
      var line01 = document.createElement('div');
      line01.append(postinfo.title + '-' + postinfo.user.nickname);
      div.append(line01);
      var line02 = document.createElement('div');
      line02.append(formatData(postinfo.createDate));
      div.append(line02);
      secPost.append(div);
    }
    page = data.resultData.page;
    spPage.innerHTML =
      '当前页/总页数/记录数：' +
      page.pageNumber +
      '/' +
      page.pageCount +
      '/' +
      page.total;
  });
}
query();
var btnPre = document.getElementById('btnPre');
var spPage = document.getElementById('spPage');
var btnNext = document.getElementById('btnNext');
var btnGo = document.getElementById('btnGo');
var txtPageNumber = document.getElementById('txtPageNumber');
txtPageNumber.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    toPage();
  }
});

btnGo.addEventListener('click', function () {
  toPage();
});

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
