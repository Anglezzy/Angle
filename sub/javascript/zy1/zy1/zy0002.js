// 控制台显示信息，确认js已经被导入，要在浏览器控制台查看
console.log('进入zy0002.js');
/*
功能说明，点击计算按钮之后
要求文本框中必须输入的是数
如果不是就显示错误信息
如果是就计算结果
*/
// 第一步，获取页面的计算按钮和输入框，以及提示信息的元素
var jisuan = document.getElementById('jisuan'); //计算的按钮
var n01 = document.getElementById('n01'); //加法的第一个输入框
var n02 = document.getElementById('n02'); //加法的第二个输入框
var jieguo01 = document.getElementById('jieguo01'); //加法的结果
var n03 = document.getElementById('n03'); //减法的第一个框
var n04 = document.getElementById('n04'); //减法的第二个框
var jieguo02 = document.getElementById('jieguo02'); //减法的结果
var sperr = document.getElementById('sperr'); //提示错误信息
//显示元素是不是正确
console.log(jisuan, n01, n02, jieguo01, n03, n04, jieguo02, sperr);

//第二部: 计算按钮的单机动作
jisuan.addEventListener('click', function() {
  console.log('点击计算按钮');
  //第三部，校验输入的值是不是数
  var num01 = parseFloat(n01.value); //获取n01 （加法的第一个输入框）的输入值
  //parseFloat转换参数成为数值，如果参数是数值类型就会成功转换，否则返回NaN
  //isNaN判断参数是不是非数，不是数就返回true真，是数就返回false假
  console.log(n01. value, '是不是非数: ', isNaN(parseFloat(num01)));
  //判断n01的值是不是数
  if (isNaN(num01)) {
    sperr.innerHTML = '加法的第一个输入不是数！';
    return;
  }
 //第二个数
 var num02 = parseFloat(n02.value);
 if (isNaN(num02)) {
   sperr.innerHTML = '加法的第二个输入不是数！';
   return;
 }
 //第三个
 var num03 = parseFloat(n03.value);
 if(isNaN(num03)) {
   sperr.innerHTML = '减法的第一个输入不是数';
   return;
 }
 //第四个
 var num04 = parseFloat(n04.value);
 if(isNaN(num04)) {
   sperr.innerHTML = '减法的第二个输入不是数！';
   return;
 }
//第四步，计算并显示结果、
//执行到这里，说明数值都输入了
 sperr.innerHTML = '';//清空错误信息
 //加法的结果
 jieguo01.innerHTML = num01 + num02;
 //减法的结果
 jieguo02.innerHTML = num03 - num04;
});
