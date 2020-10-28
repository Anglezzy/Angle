var txtQname = document.getElementById('txtQname');
var btnAdd = document.getElementById('btnAdd');
var divData = document.getElementById('divData');
var btnSave = document.getElementById('btnSave');
btnAdd.addEventListener('click', function () {
  $('#add-dialog').modal('show');
});
var txtname = document.getElementById('txtname');
var txturl = document.getElementById('txturl');
var txtinfo = document.getElementById('txtinfo');
console.log(btnSave, btnAdd);
btnSave.addEventListener('click', function () {
  huhuiyu.ajax(
    '/media/addVideo',
    {
      tbMedia: {
        info: txtinfo.value,
        name: txtname.value,
        url: txturl.value,
      },
    },
    function (data) {
      showInfo(data.message);
      if (data.success) {
        txturl.value = '';
        txtname.value = '';
        txtinfo.value = '';
      }
    }
  );
});
var divInfo = document.querySelector('#info-dialog .modal-body');
console.log(divInfo);
function showInfo(info) {
  divInfo.innerHTML = info;
  $('#info-dialog').modal('show');
}
var page = { pageNumber: 1, pageSize: 10 };
function query() {
  huhuiyu.ajax(
    '/media/queryVideo',
    {
      page: page,
      tbMedia: { name: document.getElementById('txtQname').value },
    },
    function (data) {
      if (!data.success) {
        showInfo(data.message);
        return;
      }
      var tbData = document.getElementById('tbData');
      tbData.innerHTML = '';
      var list = data.resultData.list;
      for (var i = 0; i < list.length; i++) {
        var info = list[i];
        console.log(info);
        var tr = document.createElement('tr');
        tbData.append(tr);
        // 将行的数据和tr关联起来
        tr.info = info;
        // 视频名称
        var td = document.createElement('td');
        tr.append(td);
        td.append(info.name);
        // 视频地址
        td = document.createElement('td');
        tr.append(td);
        td.append(info.url);
        // 视频信息
        td = document.createElement('td');
        tr.append(td);
        td.append(info.info);
        // 是否置顶
        td = document.createElement('td');
        tr.append(td);
        var btnSticky = document.createElement('span');
        btnSticky.classList.add(
          'btn',
          info.sticky == 'y' ? 'btn-danger' : 'btn-primary'
        );
        btnSticky.append(info.sticky == 'y' ? '取消置顶' : '置顶歌曲');
        td.append(btnSticky);
        btnSticky.addEventListener('click', modifySticky);
        // 操作按钮
        td = document.createElement('td');
        tr.append(td);
        // 修改
        var btnModify = document.createElement('span');
        btnModify.classList.add('btn', 'btn-success', 'btn01');
        btnModify.append('修改视频');
        td.append(btnModify);
        btnModify.addEventListener('click', showModify);
        // 删除
        var btnDelete = document.createElement('span');
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.append('删除视频');
        td.append(btnDelete);
        btnDelete.addEventListener('click', showDelete);
      }
    }
  );
}
function modifySticky() {
  var info = this.parentElement.parentElement.info;
  var url =
    info.sticky == 'y'
      ? '/media/disableVideoSticky'
      : '/media/enableVideoSticky';
  huhuiyu.ajax(url, { 'tbMedia.mid': info.mid }, function (data) {
    if (!data.success) {
      showInfo(data.message);
      return;
    }
    query();
  });
}
function showModify() {
  modifyInfo = this.parentElement.parentElement.info;
  txtMname.value = modifyInfo.name;
  txtMurl.value = modifyInfo.url;
  txtMinfo.value = modifyInfo.info;
  $('#modify-dialog').modal('show');
}
btnModify.addEventListener('click', function () {
  huhuiyu.ajax(
    '/media/updateVideo',
    {
      tbMedia: {
        mid: modifyInfo.mid,
        info: txtMinfo.value,
        name: txtMname.value,
        url: txtMurl.value,
      },
    },
    function (data) {
      showInfo(data.message);
      query();
    }
  );
});
var btnDelete = document.getElementById('btnDelete');
var deleteDiv = document.querySelector('#delete-dialog .modal-body');
var deleteInfo = {};
function showDelete() {
  deleteInfo = this.parentElement.parentElement.info;
  deleteDiv.innerHTML = '是否删除名称为' + deleteInfo.name + '的歌曲？';
  $('#delete-dialog').modal('show');
}
btnDelete.addEventListener('click', function () {
  $('#delete-dialog').modal('hide');
  huhuiyu.ajax(
    '/media/deleteVideo',
    { 'tbMedia.mid': deleteInfo.mid },
    function (data) {
      showInfo(data.message);
      query();
    }
  );
});
huhuiyu.autoLogin(function () {
  query();
});
