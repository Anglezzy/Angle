console.log('执行js');
var dj = 0;
var xueliang = 20000;
var xl = document.getElementById('xl');
var qn = document.getElementById('qn');
var zzy = document.getElementById('zzy');
zzy.addEventListener('click', function() {
  dj = dj + 1;
  qn.innerHTML = dj;
});
setInterval(function() {
  xueliang = xueliang - dj * 1359;
  xl.innerHTML = xueliang;
  if (xueliang < 0) {
    xl.innerHTML = '世界boss已经击败';
  }
}, 1000);
