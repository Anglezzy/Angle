var now = new Date();
var huor = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDay();
setInterval(function() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDay() + 1;
  document.getElementById('a1').innerHTML =
    year + '年' + month + '月' + day + '日';
}, 1000);
setInterval(function() {
  huor = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  document.getElementById('a2').innerHTML = huor + ':' + minute + ':' + second;
});
document.getElementById('a5').addEventListener('click', function() {
  document.getElementById('a6').setAttribute('class', 'a10');
  document.getElementById('a3').setAttribute('class', 'a1');
  document.getElementById('a7').setAttribute('class', 'a9');
  document.getElementById('a8').setAttribute('class', 'a8');
  document.getElementById('a9').setAttribute('class', 'a16');
  document.getElementById('a10').setAttribute('class', 'a17');
});
document.getElementById('a4').addEventListener('click', function() {
  document.getElementById('a6').setAttribute('class', 'a5');
  document.getElementById('a3').setAttribute('class', 'a2');
  document.getElementById('a7').setAttribute('class', 'a3');
  document.getElementById('a8').setAttribute('class', 'a4');
  document.getElementById('a9').setAttribute('class', 'a14');
  document.getElementById('a10').setAttribute('class', 'a15');
});
document.getElementById('dianji').addEventListener('click',function(){
  document.getElementById('dianji').setAttribute('class','a25 i')
})
var dazi = document.getElementById('dazi');
var info =
  '愿你一生有山，有树可栖与心爱之人 春赏花夏，纳凉秋登山冬扫雪 ​​​​';
var index = 0;
setInterval(function() {
  dazi.innerHTML = dazi.innerHTML + info.charAt(index);
  index = index + 1;
}, 200);
