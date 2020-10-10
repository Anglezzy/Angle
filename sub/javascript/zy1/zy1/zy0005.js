console.log('进入0005.js');
// 创建五种不同的html元素
var div01 = document.getElementById('div01');
var ele01 = document.createElement('input');
div01.append(ele01);
var ele02 = document.createElement('lable');
ele02.append('旅行');
var ele02_01 = document.createElement('input');
ele02_01.setAttribute('type', 'checkbox');
ele02_01.setAttribute('value', 'game');
ele02_01.setAttribute('data-index', 0);
ele02.append(ele02_01);
div01.append(ele02);
// ul li是复合的标签
var ele03 = document.createElement('ul');
var ele04 = document.createElement('li');
ele04.append('第一章');
ele03.append(ele04);
ele04 = document.createElement('li');
ele04.append('第二章');
ele03.append(ele04);
div01.append(ele03);
// a标记有herf这种特殊的属性
var ele05 = document.createElement('a');
ele05.setAttribute('href', 'http://huhuiyu.top');
ele05.append('一个超级酷帅的老师的网站');
ele05.append('target', '_black');
div01.append(ele05);
// 指定循环范围
var num01 = document.getElementById('num01');
var num02 = document.getElementById('num02');
var btn01 = document.getElementById('btn01');
var div02 = document.getElementById('div02');
btn01.addEventListener('click', function () {
  div02.innerHTML = '';
  var n1 = parseInt(num01.value);
  var n2 = parseInt(num02.value);
  console.log(n1, n2);
  for (var mi = n1; mi <= n2; mi++) {
    var elep = document.createElement('p');
    elep.append(mi);
    div02.append(elep);
  }
});

// 动态创建
var ta01 = document.getElementById('ta01');
var btn02 = document.getElementById('btn02');
btn02.addEventListener('click', function() {
  console.log(ta01.value);
  var ele = document.createElement(ta01.value);
  div02.append(ele);
});

