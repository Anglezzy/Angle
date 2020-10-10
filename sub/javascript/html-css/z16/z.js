console.log('进入z.js');
var djcs = 0;
// 人气值
var rqz = 0;
// 页面元素
var sprq = document.getElementById('sprq');
var btnJoin = document.getElementById('btnJoin');
// 图片元素
var img01 = document.getElementById('img01');
var img02 = document.getElementById('img02');

// 点击支持按钮的动作
btnJoin.addEventListener('click',function(){
  djcs = djcs + 1;
  img01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    img01.setAttribute('class','');
  },1000);
  console.log('点击次数: ', djcs);
});

setInterval(function() {
  // 人气值自动根据人数上涨
  rqz = rqz + djcs * 3100;
  sprq.innerHTML = rqz;

  // 人气值10修改图片，还要加上动画
  // js的逻辑判断
  // if(逻辑判断表达方式){ //如果逻辑表达式为真，就会执行括号里面代码}
  // 数值相关的逻辑表达式 a < 10
  // <,>,<=,>=,==对应的意义：小于，大于，小于或者等于，大于或者等于，相等
  if(rqz > 20000) {
    // js直接修改样式的方法 (style) 的方法
    // 元素.style可以获取和设置样式 元素.style.样式属性名称='样式值';
    sprq.style.color = '#880000';
  }

  if(rqz>40000) {
    sprq.style.color='#bb0000';
  }

  if(rqz>80000) {
    sprq.style.color='#ff0000';
  }

  if (rqz > 100000) {
    img01.setAttribute('src','宝宝.jpg');
    img01.setAttribute('class','animated bounce');
    img02.setAttribute('src','我.jpg');
    img02.setAttribute('class','animated flash');
  }
}, 1000);
// =================================================  时间 ==============================================
var now = new Date();
console.log(now);
// 获取时间的某一个部分
// 小时,分钟,秒
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时: ', hour);
console.log('分钟: ', minute);
console.log('秒: ', second);
// 年月日，月份是0-11，表示1-12月
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);

document.getElementById('spTime').innerHTML = 
  hour + ':' + minute + ':'+ second;

  // 反复间隔时间执行代码
  // 第一个参数是要执行的代码，第二个参数是间隔的毫秒值，1000就是一秒
  setInterval(function(){
    // console.log(new Date());
    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    document.getElementById('spTime').innerHTML = 
      hour + ':' + minute + ':' + second;
  },1000);
