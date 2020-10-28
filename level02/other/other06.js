console.log('慢动作循环');
var divJs = document.getElementById('divJs');

for (var i = 0; i < 20; i++) {
  var delay = i * 1000;
  setTimeout(function () {
    var span = document.createElement('span');
    divJs.append(span);
  }, delay);
}

var divJs01 = document.getElementById('divJs01');

for (var i = 0; i < 20; i++) {
  var span = document.createElement('span');
  divJs01.append(span);
}

var txtCount = document.getElementById('txtCount');
var btnCount = document.getElementById('btnCount');
var divJs02 = document.getElementById('divJs02');

btnCount.addEventListener('click', function () {
  divJs02.innerHTML = '';
  var count = parseInt(txtCount.value);
  if (isNaN(count) || count < 1 || count > 200) {
    return;
  }
  for (var i = 0; i < count; i++) {
    divJs02.append(document.createElement('span'));
  }
});

// 反复循环版本
var max = 10;
var divJs03 = document.getElementById('divJs03');
var amount = 0;
setInterval(function () {
  divJs03.append(document.createElement('span'));
  amount++;
  if (amount > max) {
    divJs03.innerHTML = '';
    amount = 0;
  }
}, 1000);

// null 没有获取到元素 ,not defined 变量名称瞎写 , undefined json对象或者元素的属性名
console.log(divJs03.len); //undefined
console.log(divJs04); //not defined
console.log(document.getElementById('aaa')); //null

