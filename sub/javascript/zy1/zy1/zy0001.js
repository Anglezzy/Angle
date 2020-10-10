console.log('进入h0001.js====');

var bar = document.getElementById('bar'); 
var nav01 = document.getElementById('nav01'); 
var nav02 = document.getElementById('nav02'); 
var nav03 = document.getElementById('nav03'); 
var nav04 = document.getElementById('nav04'); 
var nav05 = document.getElementById('nav05'); 

var page01 = document.getElementById('page01');
var page02 = document.getElementById('page02');
var page03 = document.getElementById('page03');
var page04 = document.getElementById('page04');
var page05 = document.getElementById('page05');


console.log(bar, nav01, nav02, nav03, nav04, nav05);


var nowpage = page03;

//导航的事件处理
nav01.addEventListener('click', function() {
  //第一个就是把滑块移动到0%
  //元素的style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  nowpage.setAttribute('class','move-out');//当前页出去
  page01.setAttribute('class','move-in');//页面一进来
  nowpage = page01;//当前页变成第一页
});

nav02.addEventListener('click', function() {
  bar.style.left = '33.33333%';
  //切换页面动画 当前的页面套用出去的动画，页面二套用进来的动画
  nowpage.setAttribute('class','move-out');
  page02.setAttribute('class','move-in');
  //页面二成为当前页
  nowpage = page02;

});

nav03.addEventListener('click', function() {
  bar.style.left = '66.66666%';
});

nav04.addEventListener('click', function() {
  //第一个就是把滑块移动到0%
  //元素的style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  nowpage.setAttribute('class','move-out');//当前页出去
  page01.setAttribute('class','move-in');//页面一进来
  nowpage = page01;//当前页变成第一页
});

nav05.addEventListener('click', function() {
  //第一个就是把滑块移动到0%
  //元素的style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  nowpage.setAttribute('class','move-out');//当前页出去
  page01.setAttribute('class','move-in');//页面一进来
  nowpage = page01;//当前页变成第一页
});