console.log('执行d7.js====')
var a = 100;
var b = 3;
// 运算符 +-*/% 加，减，乘，除，取模（余商）
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
 //a mod b(余商)整除余下的数 100除以3，最大只能是33，余数是1
console.log(a % b);
console.log(a * a - b);
console.log(a * (a - b));

// 变量来源于页面的元素以及输入框的值
// 页面上id是jieguo元素
var jieguo = document.getElementById('jieguo');
console.log(jieguo);
var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
console.log(shuzi01,shuzi02);
var jisuan = document.getElementById('jisuan');
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var jieguo01 = document.getElementById('jieguo01');
// 作业：添加减法，乘法，除法的计算
jisuan.addEventListener('click',function(){
  //用shuzi01+shuzi02的输入值放到jieguo里面去
  // 注意！！！文本框输入的值都是字符
  // 而计算机中字符的加法是拼接字符
  // js提供了转换字符成为数值的方法,parseFloat(字符)
  jieguo.innerHTML = parseFloat(shuzi01.value) + parseFloat (shuzi02.value);
  jieguo01.innerHTML = shuzi03.value % shuzi04.value;

});

// 点击动画效果
var donghua  = document.getElementById('donghua');
var dh = document.getElementById('dh');

donghua.addEventListener('click',function(){
  dh.setAttribute('class','animated bounce');
  // 等动画完成 (比如动画是1秒) 之后，去掉class1的值，恢复到默认的状态
  // setTimeout是要延时执行的代码，和setInterval不一样的是，只会执行一次
  // 第一个参数是要延时执行的代码，第二个参数是延时的毫秒数
  setTimeout(function(){
    // 清空class的值，还原成默认状态
    dh.setAttribute('class','');
    console.log('===>延时执行代码');
  },1000);
});
  
// 作业2，完善上一次动画切换作业无法点击多次的问题