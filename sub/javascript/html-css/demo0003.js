console.log('进入demo0003.js');
// 需要导入huhuiyu.utils.js才能使用下面的功能
console.log(huhuiyu.getBrowserInfo()); //获取浏览器的相关信息
console.log(huhuiyu.isMobile()); //是否是手机模式

var desktop = document.getElementById('desktop');
var phone = document.getElementById('phone');
var loadpage = document.getElementById('loadpage');
// 虚拟加载速度慢的效果
setTimeout(function() {
  loadpage.style.display = 'none';
  if (huhuiyu.isMobile()) {
    phone.style.display = 'block';
    // alert('手机模式');
  } else {
    desktop.style.display = 'block';
    // alert('电脑模式');
  }
},5000);

//监听页面滚动
window.addEventListener('scroll',function() {
  var stop = document.documentElement.scrollTop;//上下滚动的值
  var sleft = document.documentElement.scrollLeft;//左右滚动的值
  console.log('页面滚动',stop,sleft);
});

//作业:将上周周作业改造成手机和电脑自适应,或者两个不同的版本