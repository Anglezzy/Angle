
var jisuan = document.getElementById('jisuan'); 
var n01 = document.getElementById('n01'); 
var n02 = document.getElementById('n02'); 
var jieguo01 = document.getElementById('jieguo01'); 
var n03 = document.getElementById('n03'); 
var n04 = document.getElementById('n04'); 
var jieguo02 = document.getElementById('jieguo02'); 
var n05 = document.getElementById('n05');
var n06 = document.getElementById('n06');
var jieguo03 = document.getElementById('jieguo03'); 
var n07 = document.getElementById('n07');
var n08 = document.getElementById('n08');
var jieguo04 = document.getElementById('jieguo04'); 
var n09 = document.getElementById('n09');
var n10 = document.getElementById('n10');
var jieguo05 = document.getElementById('jieguo05'); 

var sperr = document.getElementById('sperr'); 

console.log(jisuan, n01, n02, jieguo01, n03, n04, jieguo02, sperr, n05, n06, jieguo03, n07, n08, jieguo04, n09, n10, jieguo05);

jisuan.addEventListener('click', function() {
  console.log('点击计算按钮');
  var num01 = parseFloat(n01.value); 
  console.log(n01. value, '是不是非数: ', isNaN(parseFloat(num01)));

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
 var num05 = parseFloat(n05.value);
 if(isNaN(num05)) {
   sperr.innerHTML = '乘法的第一个输入不是数！';
   return;
 }
 var num06 = parseFloat(n06.value);
 if(isNaN(num06)) {
   sperr.innerHTML = '乘法的第二个输入不是数！';
   return;
 }
 var num07 = parseFloat(n07.value);
 if(isNaN(num07)) {
   sperr.innerHTML = '除法的第一个输入不是数！';
   return;
 }
 var num08 = parseFloat(n08.value);
 if(isNaN(num08)) {
   sperr.innerHTML = '除法的第二个输入不是数！';
   return;
 }
 var num09 = parseFloat(n09.value);
 if(isNaN(num09)) {
   sperr.innerHTML = '余商的第一个输入不是数！';
   return;
 }
 var num10 = parseFloat(n10.value);
 if(isNaN(num10)) {
   sperr.innerHTML = '余商的第二个输入不是数！';
   return;
 }
//第四步，计算并显示结果、
//执行到这里，说明数值都输入了
 sperr.innerHTML = '';//清空错误信息
 //加法的结果
 jieguo01.innerHTML = num01 + num02;
 //减法的结果
 jieguo02.innerHTML = num03 - num04;

 jieguo03.innerHTML = num05 * num06;

 jieguo04.innerHTML = num07 / num08;

 jieguo05.innerHTML = num09 % num10;

 


});


