console.log('进入z1.js');

var bar = document.getElementById('bar'); 
var nav01 = document.getElementById('nav01'); 
var nav02 = document.getElementById('nav02'); 
var nav03 = document.getElementById('nav03'); 
var nav04 = document.getElementById('nav04'); 
var nav05 = document.getElementById('nav05'); 

var tup01 = document.getElementById('tup01'); 
var tup02 = document.getElementById('tup02'); 
var tup03 = document.getElementById('tup03'); 
var tup04 = document.getElementById('tup04');
var tup05 = document.getElementById('tup05'); 

console.log(bar, nav01, nav02, nav03, nav04, nav05);

var nowpage = tup01;

nav01.addEventListener('click', function() {
 bar.style.left = '0%';
 var nowpageid = nowpage.getAttribute('id');
 var dir = nowpageid > 'tup01';
 console.log(nowpageid, 'tup01',dir);
 if (dir) {
  nowpage.setAttribute('class', 'move-out-right');
  tup01.setAttribute('class', 'move-in-right');
} else {
  nowpage.setAttribute('class', 'move-out'); 
  tup01.setAttribute('class', 'move-in'); 
}
nowpage = tup01; 
});
nav02.addEventListener('click', function() {
  bar.style.left = '25%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'tup02';
  console.log(nowpageid, 'tup02', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    tup02.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    tup02.setAttribute('class', 'move-in');
  }
  nowpage = tup02;
});
nav03.addEventListener('click', function() {
  bar.style.left = '50%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'tup03';
  console.log(nowpageid, 'tup03', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    tup03.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    tup03.setAttribute('class', 'move-in');
  }
  nowpage = tup03;
});
nav04.addEventListener('click', function() {
  bar.style.left = '75%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'tup04';
  console.log(nowpageid, 'tup04', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    tup04.setAttribute('class', 'move-in-right');
  } else {
    nowpage.setAttribute('class', 'move-out');
    tup04.setAttribute('class', 'move-in');
  }
  nowpage = tup03;
});
nav05.addEventListener('click', function() {
  bar.style.left = '100%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'tup05';
  console.log(nowpageid, 'tup05', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right');
    tup05.setAttribute('class', 'move-in-right');s
  } else {
    nowpage.setAttribute('class', 'move-out');
    tup05.setAttribute('class', 'move-in');
  }
  nowpage = tup03;
});




















