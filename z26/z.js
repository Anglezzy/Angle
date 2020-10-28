var inp01 = document.getElementById('inp01');
var btn01 = document.getElementById('btn01');
var div01 = document.getElementById('div01');
var btnQuery = document.getElementById('btnQuery');
var divtxt = document.getElementById('divtxt');
var div02 = document.getElementById('div02');
var div03 = document.getElementById('div03');
var div04 = document.getElementById('div04');
var btnMore = document.getElementById('btnMore');
var PAGE_STEP = 10;
btn01.addEventListener('click', function () {
  var param = { tbImages: { content: inp01.value } };
  var tbImages_content = inp01.value;
  ralap.ajax('post', '	/util/addText', param, function (data) {
    div01.innerHTML = data.message;
  });
});
var imgs = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=650&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=651&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=652&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=653&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=654&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=655&tbOssInfo.obid=11',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=655&tbOssInfo.obid=11',
];
var page = { pageNumber: 1, pageSize: 10 };
btnQuery.addEventListener('click', function () {
  ralap.ajax('post', '/util/queryAllText', { page: page }, function (data) {
    var list = data.resultData.list;
    page = data.resultData.page;
    divtxt.innerHTML = '';
    div03.innerHTML = '';
    div04.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      div02.classList.remove('dis');
      btnMore.classList.remove('lost');
      var txtinfo = list[i];
      console.log(txtinfo.content);
      var div = document.createElement('div');
      div.innerHTML = txtinfo.content;
      divtxt.append(div);
      var div01 = document.createElement('div');
      div01.setAttribute('class', 'div03');
      div03.append(div01);
      var index = Math.floor(Math.random() * imgs.length);
      var div3 = document.createElement('img');
      var div4 = document.createElement('div');
      div4.append(div3);
      div3.setAttribute('src', imgs[index]);
      div04.append(div4);
    }
  });
});

btnMore.addEventListener('click', function () {
  page.pageSize = page.pageSize + PAGE_STEP;
  btnQuery.click();
});
