console.log('进入h0002.js');
// 通过循环产生颜色效果
var div01 = document.getElementById('div01');
// 155 - 255 rgb(155,0,0)
for (var i = 55; i <= 255; i = i + 10) {
  // console.log(i);
  // 1: 创建div
  var elediv = document.createElement('div');
  // 2: 计算颜色
  var color = 'rgb(' + i + ',0,0)';
  // console.log(color);
  // 3: 设置背景颜色
  elediv.style.backgroundColor = color;
  // 4 :显示的内容就是颜色值
  elediv.append(color);
  // 5: 添加到页面
  div01.append(elediv);
}

// 随机动画
var animates = [
  'bounceIn',
  'flash',
  'swing',
  'flipInx',
  'zoomIn',
  'heartBeat',
  'rotateIn',
  'jackInTheBox',
];
var div02 = document.getElementById('div02');
var index = Math.floor(Math.random() * animates.length); //随机索引
div02.setAttribute('class', 'animated ' + animates[index]);

// 无限循环的更新动画
setInterval(function () {
  index = Math.floor(Math.random() * animates.length); //随机索引
  div02.setAttribute('class', 'animated ' + animates[index]);
  setTimeout(function () {
    div02.setAttribute('class', '');
  }, 1500);
}, 2000);

// 动态获取页面元素
var divs = document.querySelectorAll('#div03>div');
console.log(divs);
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
  index = Math.floor(Math.random() * animates.length); //随机索引
  div.setAttribute('class', 'animated infinite ' + animates[index]);
}

// 动态修改class的正确姿态
var div04 = document.getElementById('div04');
var btnAdd = document.getElementById('btnAdd');
var btnRemove = document.getElementById('btnRemove');
btnAdd.addEventListener('click', function () {
  div04.classList.add('class01', 'animated', 'flash', 'infinite');
});

btnRemove.addEventListener('click', function () {
  //动态添加class的值,元素classList是元素所有套用
  div04.classList.add('class01', 'animated', 'flash', 'infinite');
});

btnRemove.addEventListener('click', function () {
  //动态移除class的值
  div04.classList.remove('class01', 'animated', 'flash', 'infinite');
});

// 作业1，按照上课的颜色特效模式完成五个不同的色系 (自己随意定制颜色) 的效果
// 作业2，把上课动画效果全部补齐
