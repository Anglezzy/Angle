console.log('进入postmanage.js');
// 添加相关功能
var btnAdd = document.getElementById('btnAdd');
var btnAddPost = document.getElementById('btnAddPost');
var btnAddClose = document.getElementById('btnAddClose');
btnAdd.addEventListener('click', function () {
  // 显示对话框
  $('#add-dialog').modal('show');
});
btnAddClose.addEventListener('click', function () {
  // 隐藏对话框
  $('#add-dialog').modal('hide');
});

btnAddPost.addEventListener('click', function () {
  var tbPost = {
    title: txtTitle.value,
    content: txtConttent.value,
  };
  huhuiyu.ajax(
    'post',
    '/post/add',
    {
      tbPost,
      tbPost,
    },
    function (data) {
      alert(data.message);
      txtTitle.value = '';
      txtConttent.value = '';
    }
  );
});

// 查询相关功能
var page = {
  pageNumber: 1,
  pageSize: 5,
};

function query() {
  huhuiyu.ajax(
    'post',
    '/post/queryByUser',
    {
      page: page,
    },
    function (data) {
      console.log(data);
      // 单独页面的登录校验功能
      if (data.code == 1000) {
        alert(data.message);
        location.href == 'https://qw0922.top/ajax/ajax01.html';
        return;
      }
      // api应用编程接口 ide
      var list = data.resultData.list;
      page = data.resultData.page;
      var tbData = document.getElementById('tbData');
      tbData.innerHTML = '';
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        console.log(m);
        // 创建表格的行和单元格
        var tr = document.createElement('tr');
        // 标题
        var th = document.createElement('th');
        th.append(m.title);
        tr.append(th);
        // 内容
        th = document.createElement('th');
        th.append(m.content);
        tr.append(th);
        // 时间
        th = document.createElement('th');
        th.append(m.createDate);
        tr.append(th);
        // 操作按钮
        th = document.createElement('th');
        var btnDelete = document.createElement('span');
        btnDelete.classList.add('btn', 'btn-danger');
        btnDelete.append('删除');
        th.append(btnDelete);
        // 删除相关功能开始=================================================
        // 通过json字段的方式记住要删除的数据
        btnDelete.deleteInfo = m;
        btnDelete.addEventListener('click', function () {
          console.log(this.deleteInfo);
          deletePost = this.deleteInfo; //记住要删除的信息
          var spDelInfo = document.getElementById('spDelInfo');
          spDelInfo.innerHTML = this.deleteInfo.title;
          $('#delete-dialog').modal('show');
        });
        // 删除相关功能完毕================================================
        var btnModify = document.createElement('span');
        btnModify.classList.add('btn', 'btn-info');
        btnModify.append('修改');
        th.append(btnModify);
        // 修改的相关功能开始===============================================
        btnModify.modifyInfo = m;
        btnModify.addEventListener('click', function () {
          deletePost = this.modifyInfo;
          txtMtitle.value = deletePost.title;
          txtMcontent.value = deletePost.content;
          $('#modify-dialog').modal('show');
        });
        // 修改的相关功能完毕===============================================
        tr.append(th);
        tbData.append(tr);
      }
    }
  );
}

// 删除对话框功能
var deletePost; // 用于记录被选中要删除的信息
var btnDelInfo = document.getElementById('btnDelInfo');
var btnDelClose = document.getElementById('btnDelClose');

btnDelClose.addEventListener('click', function () {
  $('#delete-dialog').modal('hide');
});

btnDelInfo.addEventListener('click', function () {
  console.log(deletePost);
  huhuiyu.ajax(
    'post',
    '/post/delete',
    {
      tbPost: {
        postId: deletePost.postId,
      },
    },
    function (data) {
      alert(data.message);
      $('#delete-dialog').modal('hide');
      query();
    }
  );
});
// 修改对话框功能
var txtMtitle = document.getElementById('txtMtitle');
var txtMcontent = document.getElementById('txtMcontent');
var btnSavePost = document.getElementById('btnSavePost');
var btnModifyClose = document.getElementById('btnModifyClose');
btnModifyClose.addEventListener('click', function () {
  $('modify-dialog').modal('hide');
});
btnSavePost.addEventListener('click', function () {
  huhuiyu.ajax(
    'post',
    '/post/update',
    {
      tbPost: {
        postId: deletePost.postId,
        title: txtMtitle.value,
        content: txtMcontent.value,
      },
    },
    function (data) {
      alert(data.message);
      $('modify-dialog').modal('hide');
      query();
    }
  );
});
query();
