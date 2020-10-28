console.log('进入message.js');
// 显示消息对话框功能
var divMessage = document.getElementById('divMessage');
function showAlert(message) {
  divMessage.innerHTML = message;
  $('#alert-dialog').modal('show');
}

var btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', function () {
  $('#add-dialog').modal('show');
});
var btnAddInfo = document.getElementById('btnAddInfo');
var txtNoteInfo = document.getElementById('txtNoteInfo');
btnAddInfo.addEventListener('click', function () {
  huhuiyu.ajax(
    'post',
    '/note/add',
    { tbNote: { noteInfo: txtNoteInfo.value } },
    function (data) {
      showAlert(data.message);
      if (data.success) {
        txtNoteInfo.value = '';
      }
    }
  );
});
