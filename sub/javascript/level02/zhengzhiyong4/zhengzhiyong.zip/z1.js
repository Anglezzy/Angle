console.log('执行z1.js')

var BG = document.getElementById('BG');
var BG2 = document.getElementById('BG2');
var BG3 = document.getElementById('BG3');
var BG4 = document.getElementById('BG4');
console.log(BG, BG2, BG3, BG4);

var attr = BG.getAttribute('id');
console.log(attr);
attr = BG.getAttribute('placeholder');
console.log(attr);
attr = BG.getAttribute('class');
console.log('class',attr);

BG.addEventListener('click',function() {
  console.log('确定按钮点击');
  var username = BG.value;
  username = username.replace(/\s/g, '');
  console.log('用户名:',username);
if (username.length < 6) {
  spInfo.innerHTML = '长度不能小于6';
  BG.focus();
  return;
}
if (username.length > 16) {
  spInfo.innerHTML = '长度不能大于16';
  BG.focus();
  return;
}
spInfo.innerHTML = '';
});











