console.log('进入h0003.js');

var chKXy = document.getElementById('chKXy');
var btn01 = document.getElementById('btn01');
console.log(btn01.classList);
// change事件表示checkbox的选中状态
chKXy.addEventListener('change', function () {
  if (chKXy.checked) {
    btn01.classList.remove('btn-disable');
  } else {
    btn01.classList.add('btn-disable');
  }
});

var chKXy02 = document.getElementById('chKXy02');
var btn02 = document.getElementById('btn02');

chKXy02.addEventListener('change', function () {
  if (chKXy02.checked) {
    btn02.setAttribute('class', 'btn btn-danger');
  } else {
    btn02.setAttribute('class', 'btn btn-danger btn-disable');
  }
});

// 选择器联化可以简化js工作量
var btnOk = document.getElementById('btnOk');
var divName = document.getElementById('divName');
// 通过选择器获取divName里面的input
// querySelector也是通过css选择器获取元素，但是最多只会返回一个
// querySelector也是返回一组
var txtName = document.querySelector('#divName input');
console.log(txtName);
btnOk.addEventListener('click', function () {
  if (!txtName.value) {
    // 没有输入值的情况
    divName.classList.add('error');
    return;
  }
  divName.classList.remove('error');
});
