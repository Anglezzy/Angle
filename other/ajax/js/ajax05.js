var btnAdd = document.getElementById('btnAdd');
var btnAddPost = document.getElementById('btnAddPost');
var btnAddClose = document.getElementById('btnAddClose');

var txtTitle = document.getElementById('txtTitle');
var txtContent = document.getElementById('txtContent');

btnAdd.addEventListener('click', function () {
  $('#add-dialog').modal('show');
});
btnAddClose.addEventListener('click', function () {
  $('#add-dialog').modal('hide');
});

btnAddPost.addEventListener('click', function () {
  var tbPost = { title: txtTitle.value, content: txtContent.value };
  ralap.ajax('post', '/post/add', { tbPost: tbPost }, function (data) {
    alert(data.message);
    txtTitle.value = '';
    txtContent.value = '';
  });
});
var page = { pageNumber: 1, pageSize: 5 };

function query() {
  ralap.ajax('post', '/post/queryByUser', { page: page }, function (data) {
    console.log(data);
    if (data.code == 1000) {
      alert(data.message);
      location.href = 'ajax01.html';
      return;
    }
    var list = data.resultData.list;
    page = data.resultData.page;
    var tbData = document.getElementById('tbData');
    tbData.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      console.log(m);
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.append(m.title);
      tr.append(td);
      td = document.createElement('td');
      td.append(m.content);
      tr.append(td);
      td = document.createElement('td');
      td.append(m.createDate);
      tr.append(td);
      td = document.createElement('td');
      var btnDelete = document.createElement('span');
      btnDelete.classList.add('btn', 'btn-danger');
      btnDelete.append('删除');
      td.append(btnDelete);
      btnDelete.deleteInfo = m;
      btnDelete.addEventListener('click', function () {
        console.log(this.deleteInfo);
        deletePost = this.deleteInfo; //记住要删除的信息
        var spDelInfo = document.getElementById('spDelInfo');
        spDelInfo.innerHTML = this.deleteInfo.title;
        $('#delete-dialog').modal('show');
      });
      var btnModify = document.createElement('span');
      btnModify.classList.add('btn', 'btn-info');
      btnModify.append('修改');
      td.append(btnModify);
      btnModify.modifyInfo = m;
      btnModify.addEventListener('click', function () {
        deletePost = this.modifyInfo;
        txtMtitle.value = deletePost.title;
        txtMcontent.value = deletePost.content;
        $('#modify-dialog').modal('show');
      });
      tr.append(td);
      tbData.append(tr);
    }
  });
}
var deletePost;
var btnDelInfo = document.getElementById('btnDelInfo');
var btnDelClose = document.getElementById('btnDelClose');

btnDelClose.addEventListener('click', function () {
  $('#delete-dialog').modal('hide');
});

btnDelInfo.addEventListener('click', function () {
  console.log(deletePost);
  ralap.ajax(
    'post',
    '/post/delete',
    {
      tbPost: { postId: deletePost.postId },
    },
    function (data) {
      alert(data.message);
      $('#delete-dialog').modal('hide');
      query();
    }
  );
});
var txtMtitle = document.getElementById('txtMtitle');
var txtMcontent = document.getElementById('txtMcontent');
var btnSavePost = document.getElementById('btnSavePost');
var btnModifyClose = document.getElementById('btnModifyClose');

btnModifyClose.addEventListener('click', function () {
  $('#modify-dialog').modal('hide');
});

btnSavePost.addEventListener('click', function () {
  ralap.ajax(
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
      $('#modify-dialog').modal('hide');
      query();
    }
  );
});

query();
