console.log('音频文件管理');
var btnShowAdd = document.getElementById('btnShowAdd');
var btnSave = document.getElementById('btnSave');
console.log(btnSave, btnShowAdd);

btnShowAdd.addEventListener('click', function () {
  // 弹出对话框
  $('#add-dialog').modal('show');
});

//添加音频信息
var txtname = document.getElementById('txtname');
var txturl = document.getElementById('txturl');
var txtinfo = document.getElementById('txtinfo');
var txtlylic = document.getElementById('txtlylic');

btnSave.addEventListener('click', function () {
  huhuiyu.ajax(
    '/media/addAudio',
    {
      tbMedia: {
        info: txtinfo.value,
        lylic: txtlylic.value,
        name: txtname.value,
        url: txturl.value
      }
    },
    function (data) {
      showInfo(data.message);
      // 添加成就清除信息
      if (data.success) {
        txturl.value = '';
        txtname.value = '';
        txtlylic.value = '';
        txtinfo.value = '';
      }
    }
  );
});

//弹出对话框显示信息
var divInfo = document.querySelector('#info-dialog .modal-body');
console.log(divInfo);

function showInfo(info) {
  divInfo.innerHTML = info;
  $('#info-dialog').modal('show');
}

// 数据查询
var divLoading = document.getElementById('divLoading');
var divData = document.getElementById('divData');
var page = { pageNumber: 1, pageSize: 10 };

function query() {
  // 显示等待信息
  divLoading.style.display = 'block';
  // 隐藏数据表格
  divData.style.display = 'none';
  // ajax查询
  huhuiyu.ajax(
    '/media/queryAudio',
    {
      page: page,
      tbMedia: { name: document.getElementById('txtQname').value }
    },
    function (data) {
      if (!data.success) {
        showInfo(data.message);
        return;
      }
      console.log(data);
      divLoading.style.display = 'none';
      divData.style.display = 'block';
      // 显示数据
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
        // 歌曲名称
        var td = document.createElement('td');
        tr.append(td);
        td.append(info.name);
        // 歌曲地址
        td = document.createElement('td');
        tr.append(td);
        td.append(info.url);
        // 歌曲地址
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
        // 歌词
        var btnShowLylic = document.createElement('span');
        btnShowLylic.classList.add('btn', 'btn-info');
        btnShowLylic.append('歌词');
        td.append(btnShowLylic);
        btnShowLylic.addEventListener('click', showLylic);
        // 修改
        var btnModify = document.createElement('span');
        btnModify.classList.add('btn', 'btn-primary');
        btnModify.append('修改');
        td.append(btnModify);
        btnModify.addEventListener('click', showModify);
        // 删除
        var btnDelete = document.createElement('span');
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.append('删除');
        td.append(btnDelete);
        btnDelete.addEventListener('click', showDelete);
      }
    }
  );
}

// 修改置顶功能
function modifySticky() {
  //this关键字可以获取到调用方法的对象
  // parentElement表示父元素，在这里this就是调用点击事件的按钮
  // this.parentElement就是td,this.parentElement.parentElement就是tr
  console.log(this, this.parentElement, this.parentElement.parentElement);
  var info = this.parentElement.parentElement.info;
  console.log('行数据：', info);
  // 如果sticky的值是y，表示已经置顶，调用取消置顶功能，否则调用置顶功能
  var url = info.sticky == 'y' ? '/media/disableSticky' : '/media/enableSticky';
  huhuiyu.ajax(url, { 'tbMedia.mid': info.mid }, function (data) {
    if (!data.success) {
      showInfo(data.message);
      return;
    }
    query();
  });
}

var preLylic = document.querySelector('#lylic-dialog .modal-body > pre');
console.log(preLylic);
// 显示歌词功能
function showLylic() {
  var info = this.parentElement.parentElement.info;
  console.log('行数据：', info);
  preLylic.innerHTML = info.lylic;
  $('#lylic-dialog').modal('show');
}

// 修改信息相关
var txtMname = document.getElementById('txtMname');
var txtMurl = document.getElementById('txtMurl');
var txtMinfo = document.getElementById('txtMinfo');
var txtMlylic = document.getElementById('txtMlylic');
var btnModify = document.getElementById('btnModify');
var modifyInfo = {}; //被修改的值

// 显示修改对话框
function showModify() {
  // 记住要修改的数据
  modifyInfo = this.parentElement.parentElement.info;
  // 填写要修改的数据到对应的表单元素
  txtMname.value = modifyInfo.name;
  txtMurl.value = modifyInfo.url;
  txtMinfo.value = modifyInfo.info;
  txtMlylic.value = modifyInfo.lylic;
  // 显示修改对话框
  $('#modify-dialog').modal('show');
}
// 保存修改的信息
btnModify.addEventListener('click', function () {
  huhuiyu.ajax(
    '/media/updateAudio',
    {
      tbMedia: {
        mid: modifyInfo.mid,
        lylic: txtMlylic.value,
        info: txtMinfo.value,
        name: txtMname.value,
        url: txtMurl.value
      }
    },
    function (data) {
      showInfo(data.message);
      query();
    }
  );
});

// 删除功能
var btnDelete = document.getElementById('btnDelete');
var deleteDiv = document.querySelector('#delete-dialog .modal-body');
var deleteInfo = {};
// 显示删除确认对话框
function showDelete() {
  // 记住要删除的数据
  deleteInfo = this.parentElement.parentElement.info;
  // 删除的提示信息
  deleteDiv.innerHTML = '是否删除名称为' + deleteInfo.name + '的歌曲？';
  $('#delete-dialog').modal('show');
}
// 删除数据
btnDelete.addEventListener('click', function () {
  $('#delete-dialog').modal('hide');
  huhuiyu.ajax(
    '/media/deleteAudio',
    { 'tbMedia.mid': deleteInfo.mid },
    function (data) {
      showInfo(data.message);
      query();
    }
  );
});

// 页面所有功能都需要登陆，所以开启自动登陆的方法
huhuiyu.autoLogin(function () {
  query();
  // showInfo('登陆成功！');
});