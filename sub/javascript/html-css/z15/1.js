console.log('进入1.js');
var nav01 = document.getElementById('nav01');
var nav02 = document.getElementById('nav02');
var nav03 = document.getElementById('nav03');
var nav04 = document.getElementById('nav04');
var nav05 = document.getElementById('nav05');
var bar = document.getElementById('bar');
var page01 = document.getElementById('page01');
var page02 = document.getElementById('page02');
var page03 = document.getElementById('page03');
var page04 = document.getElementById('page04');
var page05 = document.getElementById('page05');
var nowpage = page01;
nav01.addEventListener('mousemove', function () {
  bar.style.left = '0%';
});
nav02.addEventListener('mousemove', function () {
  bar.style.left = '20%';
});
nav03.addEventListener('mousemove', function () {
  bar.style.left = '40%';
});
nav04.addEventListener('mousemove', function () {
  bar.style.left = '60%';
});
nav05.addEventListener('mousemove', function () {
  bar.style.left = '80%';
});
nav01.addEventListener('click', function () {
  bar.style.left = '0%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page01';
  if (dir) {
    nowpage.setAttribute('class', 'out01');
    page01.setAttribute('class', 'in01');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page01.setAttribute('class', 'move-in');
  }
  nowpage = page01;
});
nav02.addEventListener('click', function () {
  bar.style.left = '20%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page02';
  if (dir) {
    nowpage.setAttribute('class', 'out01');
    page02.setAttribute('class', 'in01');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page02.setAttribute('class', 'move-in');
  }
  nowpage = page02;
});
nav03.addEventListener('click', function () {
  bar.style.left = '40%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page03';
  if (dir) {
    nowpage.setAttribute('class', 'out01');
    page03.setAttribute('class', 'in01');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page03.setAttribute('class', 'move-in');
  }
  nowpage = page03;
});
nav04.addEventListener('click', function () {
  bar.style.left = '60%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page04';
  if (dir) {
    nowpage.setAttribute('class', 'out01');
    page04.setAttribute('class', 'in01');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page04.setAttribute('class', 'move-in');
  }
  nowpage = page04;
});
nav05.addEventListener('click', function () {
  bar.style.left = '80%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page05';
  if (dir) {
    nowpage.setAttribute('class', 'out01');
    page05.setAttribute('class', 'in01');
  } else {
    nowpage.setAttribute('class', 'move-out');
    page05.setAttribute('class', 'move-in');
  }
  nowpage = page05;
});
