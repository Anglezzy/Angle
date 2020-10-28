var divResult01 = document.getElementById('divResult01');
var divimgs = document.getElementById('divimgs');
var spPage = document.getElementById('spPage');
var spPage01 = document.getElementById('spPage01');
var btnNext = document.getElementById('btnNext');
var btnPre = document.getElementById('btnPre');
var btnAdd = document.getElementById('btnAdd');
var txtContent = document.getElementById('txtContent');
var btnQuery01 = document.getElementById('btnQuery01');
var page01 = { pageNumber: 1, pageSize: 8 };

function query() {
  ralap.ajax('post', '/util/queryAllImage', { page: page01 }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    divimgs.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var imginfo = list[i];
      console.log(imginfo);
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      div.append(img);
      divimgs.append(div);
    }
    page = data.resultData.page;
    spPage.innerHTML =
      page.pageNumber + '/' + page.pageCount + '/' + page.total;
  });
}
query();
function toPage() {
  page01.pageNumber = txtPageNumber.value;
  query();
}

btnNext.addEventListener('click', function () {
  page01.pageNumber++;
  query();
});

btnPre.addEventListener('click', function () {
  page01.pageNumber--;
  query();
});
query();
btnAdd.addEventListener('click', function () {
  var param = { tbImages: { content: txtContent.value } };
  ralap.ajax('post', '/util/addImage', param, function (data) {
    divResult01.innerHTML = data.message;
  });
});
btnQuery01.addEventListener('click', function () {
  ralap.ajax('post', '/util/queryAllImage', { page: page01 }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    divimgs.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var imginfo = list[i];
      console.log(imginfo);
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      div.append(img);
      divimgs.append(div);
    }
  });
});
var btnPre01 = document.getElementById('btnPre01');
var btnNext01 = document.getElementById('btnNext01');
btnNext01.addEventListener('click', function () {
  page02.pageNumber++;
  query();
});

btnPre01.addEventListener('click', function () {
  page02.pageNumber--;
  query();
});
