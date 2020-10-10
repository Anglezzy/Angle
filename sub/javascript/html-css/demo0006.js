console.log('进入demo0006.js');
// 数组,其实就是一组相同的数据
var htmlcj = [100, 90, 50, 88];
var xsxm = ['小熊', '无痕'];
console.log(htmlcj, xsxm);
// 数组中的元素可以通过下标 (索引访问, 从0开始到数组长度-1)
console.log(htmlcj[1]); //显示第二个html的成绩
console.log(xsxm[0]); //显示第一个学生姓名
// 获取数组的长度
console.log(htmlcj.length, xsxm.length);
// css中选择器 :#div01表示id="div01"的元素
// #div01 input 表示id="div01"的元素里面所有input
// js提供获取css选择器表达对应的元素的功能
// querySelectorAll 选择器的意思
var inputs = document.querySelectorAll('#div01 input');
console.log(inputs);
console.log(inputs[1]);
console.log(inputs.length);
var input02 = inputs[1];
console.log(input02.value, input02.getAttribute('type'));
input02.setAttribute('title', '想和心爱的人一起去旅行');
// 可以是空的数组,没有对应选择器的元素
var eles01 = document.querySelectorAll('p');
console.log(eles01, eles01.length);
// 选择器获取元素样式是否有效无关
var eles02 = document.querySelectorAll('.div-spans span');
console.log(eles02, eles02.length);
// 组合数组和json
var json = {
  c1901: ['刘婧婷', '唐澳'],
  c1902: ['绿甲龙', '李澳', '沈娇'],
};
console.log(json.c1901);
console.log(json);

// css选择器获取元素补充说明
var cssSelectorDemo = document.querySelectorAll('.demo');
console.log(cssSelectorDemo);
cssSelectorDemo = document.querySelectorAll('div.demo');
console.log(cssSelectorDemo);

// 作业1: 创建一个带数组信息的json, 用于描述电话地址簿
// 作业2: 练习不同的选择器获取元素, 至少要两种不同的选择器获取元素的效果

// 如何知道页面加载完毕
document.body.onload = function () {
  console.log('页面加载完毕');
};
