console.log('进入z.js');var btn01 = document.getElementById('btn01');
var dh1 = document.getElementById('dh1');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');
var div6 = document.getElementById('div6');
var div7 = document.getElementById('div7');
var div8 = document.getElementById('div8');
var ids = [div1, div2, div3, div4, div5, div6, div7, div8];
console.log(ids);
max = ids.length - 1;
min = 0;
var index = Math.floor(Math.random() * (max - min + 1) + min);
console.log(ids[index]);
var inexec = false;
btn01.addEventListener('click', function () {
  if (inexec) {
    return;
  }
  inexec = true;
  ids[index].style.background = '';
  dh1.setAttribute('class', 'dh');
  timer = setInterval(function () {
    index = Math.floor(Math.random() * (max - min + 1) + min);
    ids[index].style.background = 'red';
    dh1.style.display = 'none';
  }, 5000);
  setTimeout(function () {
    dh1.style.display = 'block';
    dh1.setAttribute('class', '');
    clearInterval(timer);
    inexec = false;
  }, 5000);
});
