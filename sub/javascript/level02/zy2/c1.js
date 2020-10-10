console.log('进入c1.js====');
/**
 * 点击导航移动下方滑块
 */
//获取相关元素
var bar = document.getElementById('bar'); //导航下方的滑块
var nav01 = document.getElementById('nav01'); //第一个导航按钮
var nav02 = document.getElementById('nav02'); //第二个导航按钮
var nav03 = document.getElementById('nav03'); //第三个导航按钮
var page01 = document.getElementById('page01'); //页面一
var page02 = document.getElementById('page02'); //页面二
var page03 = document.getElementById('page03'); //页面三

console.log(bar, nav01, nav02, nav03);

//记住当前显示的是哪一个页面
var nowpage = page01; //页面开始的时候就是页面一

//导航的事件处理
nav01.addEventListener('click', function() {
  //第一个就是把滑块移动到0%
  //元素的style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  //通过元素的id的值来判定方向，如果当前的id比要切换的大就是反方向切换动画
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page01';
  console.log(nowpageid, 'page01', dir);
  //动画的效果(移动方向)通过id的大小决定
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page01.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page01.setAttribute('class', 'move-in'); //页面一进来
  }
  nowpage = page01; //当前页变成第一页
});

nav02.addEventListener('click', function() {
  bar.style.left = '33.33333%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page02';
  console.log(nowpageid, 'page02', dir);
  //切换页面动画 当前的页面套用出去的动画，页面二套用进来的动画
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page02.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page02.setAttribute('class', 'move-in');
  }
  //页面二成为当前页
  nowpage = page02;
});

nav03.addEventListener('click', function() {
  bar.style.left = '66.66666%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page03';
  console.log(nowpageid, 'page03', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    page03.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page03.setAttribute('class', 'move-in');
  }
  //页面三变成当前页
  nowpage = page03;
});
