var btnQuery = document.getElementById('btnQuery');
var divtxt = document.getElementById('divtxt');
var divResult = document.getElementById('divResult');
var inp01 = document.getElementById('inp01');
var div02 = document.getElementById('div02');
var page = { pageNumber: 1, pageSize: 115 };
function query() {
  ralap.ajax('post', '/util/queryAllText', { page: page }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    page = data.resultData.page;
    divtxt.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var txtinfo = list[i];
      console.log(txtinfo.content);
      var span = document.createElement('span');
      span.innerHTML = txtinfo.content;
      divtxt.append(span);
    }
  });
}
query();
divResult.addEventListener('click', function () {
  var param = { tbImages: { content: inp01.value } };
  var tbImages_content = inp01.value;
  ralap.ajax('post', '	/util/addText', param, function (data) {
    div02.innerHTML = data.message;
  });
});

btnQuery.addEventListener('click', function () {
  var page = { pageNumber: 1, pageSize: 110 };
  ralap.ajax('post', '/util/queryAllText', { page: page }, function (data) {
    var list = data.resultData.list;
    page = data.resultData.page;
    divtxt.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var txtinfo = list[i];
      console.log(txtinfo.content);
      var span = document.createElement('span');
      span.innerHTML = txtinfo.content;
      divtxt.append(span);
    }
  });
});
