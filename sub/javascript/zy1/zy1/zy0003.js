console.log('进入zy0003.js');
var txtNum = document.getElementById('txtNum'); //手机号输入框
var btnNum = document.getElementById('btnNum'); //确定按钮
var spError = document.getElementById('spError'); //信息提示用的span
console.log(txtNum, btnNum, spError);

//确定按钮点击事件
btnNum.addEventListener('click', function() {
  console.log('确定按钮点击事件');
  var num = txtNum.value;
  console.log('输入的手机号是: ' + num + '!');
  //去掉头尾的空格的方法
  num = num.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的手机号: ' + num + '!');
  //判断有没有输入
  if (num == '') {
    spError.innerHTML = '请输入电话号码';
    return;
  }
  //判断是不是数
  if (isNaN(num)) {
    spError.innerHTML = '请输入数字';
    return;
  }
  //判断整数
  var inum = parseInt(num);
  var fnum = parseFloat(num);
  if (inum != fnum) {
    spError.innerHTML = '请输入整数';
    return;
  }
  //判断是不是1开头的数
  // if (inum >= 10000000000 && inum < 20000000000) {
  //  spError.innerHTML = '你的电话是: ' + inum;
  //   return;
  // }
  // spError.innerHTML = '请输入1开头的11位数';

  if (inum < 10000000000 || inum >= 20000000000) {
    spError.innerHTML = '请输入1开头的11位数';
    return;
  }
  spError.innerHTML = '你的电话是:' + inum;
});
