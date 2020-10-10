console.log('执行zzy2.js');

var now = new Date();
console.log(now);

var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时: ', hour);
console.log('分钟: ', minute);
console.log('秒: ', second);

var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);

document.getElementById('spTime').innerHTML = 
  hour + ':' + minute + ':'+ second;

  setInterval(function(){
    // console.log(new Date());
    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    document.getElementById('spTime').innerHTML = 
      hour + '时' + minute + '分' + second + '秒';
  },1000);