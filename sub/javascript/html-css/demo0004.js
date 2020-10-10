console.log('进入demo0004.js');
// 控制背景颜色的表单元素
var txtRed = document.getElementById('txtRed');
var txtGreen = document.getElementById('txtGreen');
var txtBlue = document.getElementById('txtBlue');
var txtAlpha = document.getElementById('txtAlpha');
var btnColor = document.getElementById('btnColor');
// 通过css样式的选择器获取页面元素(如果有多个匹配的，只返回第一个)
// 下面的这个表达式就是获取class='container'的元素
var container = document.querySelector('.container');
console.log(txtRed, txtGreen, txtBlue, txtAlpha, btnColor, container);
// 点击按钮容器的样式中的背景颜色替换成表单元素的输入值
btnColor.addEventListener('click', function () {
  // 收集表单的输入值
  var red = txtRed.value;
  var green = txtGreen.value;
  var blue = txtBlue.value;
  var alpha = txtAlpha.value;
  // backgroundcolor:
  //  rgba(0,0,0,0.6);
  var bc = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  console.log(bc);
  // js指定style的时候,如果样式名称是有减号的,需要去掉减号,然后将减号后面的字母转大写
  container.style.backgroundColor = bc;
  // 保留样式到本地
  localStorage.setItem('backgroundColor', bc);
});

// 页面尝试加载背景颜色
var backgroundColor = localStorage.getItem('backgroundColor');
if (backgroundColor) {
  container.style.backgroundColor = backgroundColor;
}

// 切换背景图片 通过select切换背景图
var selImg = document.getElementById('selImg');
// 监听select的选择变化
selImg.addEventListener('change', function () {
  console.log(selImg.value);
  // 获取body元素
  document.body.style.backgroundImage = 'url(' + selImg.value + ')';
  localStorage.setItem('back-image', selImg.value);
});
var backimg = localStorage.getItem('back-image');
if (backimg) {
  document.body.style.backgroundImage = 'url(' + backimg + ')';
}

// 切换动画
var selAnimate = document.getElementById('selAnimate');
var divAnimate = document.getElementById('divAnimate');

selAnimate.addEventListener('change', function() {
  divAnimate.setAttribute('class',' animated ' + selAnimate.value);
  setTimeout(function() {
    divAnimate.setAttribute('class','');
  },1000);
});

divAnimate.setAttribute('class',' animated ' + selAnimate.value);
setTimeout(function() {
  divAnimate.setAttribute('class','');
},1000);

