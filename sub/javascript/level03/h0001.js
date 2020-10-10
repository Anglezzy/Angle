console.log('进入h0001.js');
// 循环基础 (重复执行代码)
// for(变量初始化；循环是否继续的逻辑判断表达式；每次循环完成之后要执行的代码)
// 三段代码都可以省略，可能造成死循环
// 变量初始化只会在循环开始之前执行一次，逻辑判断每次循环都会执行的
var i;
for (i = 0; i < 10; i++) {
  console.log('循环执行: ', i);
}
console.log(i);
// 循环输出信息到页面
var div01 = document.getElementById('div01');
console.log(div01);
// 通过循环产生span元素，然后添加到div01中 (dom操作-文档对象模型)
for (i = 0; i < 5; i++) {
  // 通过dom创建span元素 document.createElement('元素标签名称')
  var ele = document.createElement('span');
  // 添加文本内容 元素.append(追加的意思)
  ele.append('动态创建' + i);
  console.log(ele);
  //元素里面添加元素
  div01.append(ele);
}

// 年份选项动态产生=================================================
var selyear = document.getElementById('selyear');
var year = new Date().getFullYear(); //当前年份
console.log(year);
for (i = 1970; i <= year; i++) {
  //select中需要option
  var op = document.createElement('option'); //<option></option>
  // 内容是年份
  op.append(i + '年'); //<option>xxx年</option>
  // 修改属性
  op.setAttribute('value', i);
  console.log(op);
  //添加到selyear
  selyear.append(op);
}

// 月日的数据
var selmonth = document.getElementById('selmonth');
var selday = document.getElementById('selday');
for (i = 1; i <= 12; i++) {
  var op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '月');
  selmonth.append(op);
}
for (i = 1; i < 32; i++) {
  var op = document.createElement('option');
  op.setAttribute('value', i);
  op.append(i + '日');
  selday.append(op);
}

// 动态创建的元素取值也是完全正常
var btnYear = document.getElementById('btnYear');
btnYear.addEventListener('click', function () {
  //alert弹框
  alert(selyear.value);
});

//次数动态
var txtCount = document.getElementById('txtCount');
var btnCount = document.getElementById('btnCount');
var divCount = document.getElementById('divCount');

btnCount.addEventListener('click', function () {
  //清空内容
  divCount.innerHTML = '';
  var count = parseInt(txtCount.value);
  for (i = 0; i < count; i++) {
    // 延时是有规律的递增
    // 如果是50, 1000,2000,3000,4000
    // i:  0,1,2,3,4

    // 延时的值其实就是i*1000
    setTimeout(function () {
      var ele = document.createElement('div');
      ele.append('郑智勇和杨鸿芳永远在一起');
      // 套用动画样式
      ele.setAttribute('class', 'ani-div');
      divCount.append(ele);
    }, i * 1000);
  }
});

// 在页面上动态创建不少于五种类型的元素
// 使用两个输入框 循环显示两个输入框之间的所有数，例如第一个框输入是100，第二个是200
// 要在页面上显示100-200之间所有整数
// 要做第二个数必须大于第一个的数判断
