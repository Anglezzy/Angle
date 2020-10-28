var page = { pageNumber: 1, pageSize: 10 };
var divImages = document.getElementById('divImages');
var btnPre = document.getElementById('btnPre');
var spPage = document.getElementById('spPage');
var btnNext = document.getElementById('btnNext');
var btnGo = document.getElementById('btnGo');
var txtPageNumber = document.getElementById('txtPageNumber');
var txtContent = document.getElementById('txtContent');
var btnAdd = document.getElementById('btnAdd');
var btnQuery = document.getElementById('btnQuery');
var divImages = document.getElementById('divImages');
var btnMore = document.getElementById('btnMore');
var divResult = document.getElementById('divResult');
function query() {
  ralap.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    console.log(data);

    var list = data.resultData.list;
    divImages.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var imginfo = list[i];
      console.log(imginfo);
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      div.append(img);
      divImages.append(div);
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

btnAdd.addEventListener('click', function () {
  var param = { tbImages: { content: txtContent.value } };
  ralap.ajax('post', '/util/addImage', param, function (data) {
    divResult.innerHTML = data.message;
  });
});

var PAGE_STEP = 5;
var page = { pageNumber: 1, pageSize: 10 };

btnQuery.addEventListener('click', function () {
  console.log({ page: page });
  ralap.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    var list = data.resultData.list;
    page = data.resultData.page;
    divImages.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
      var imginfo = list[i];
      console.log(imginfo.content);

      var div = document.createElement('div');
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      div.append(img);
      divImages.append(div);
      img.addEventListener('click', function () {
        window.open(this.getAttribute('src'));
      });
    }
  });
});

btnMore.addEventListener('click', function () {
  page.pageSize = page.pageSize + PAGE_STEP;
  btnQuery.click();
});
