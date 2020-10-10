console.log('外部的js文件...');
document.write('<h1 style="color:red;">也可以输出html的标记</h1>');
document.write('个人信息（信息的值由js输出）');
document.getElementById('spInfo').innerHTML = '姓名:郑智勇';
document.getElementById('spEvent').addEventListener('click', function() {
  console.log('点击了spEvent');
});