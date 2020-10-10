console.log('执行z3.js')

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var btnIf = document.getElementById('btnIf');
var divResult = document.getElementById('divResult');
console.log(b1, b2, b3, b4, b5, b6, divResult, btnIf);

btnIf.addEventListener('click',function() {
  console.log('开始做判断');
})

var k1 = b1.value;
var k2 = b2.value;
var k3 = b3.value;
var k4 = b4.value;
var k5 = b5.value;
var k6 = b6.value;
console.log('输入的值',k1,k2,k3,k4,k5,k6);
divResult.innerHTML = '第一个值是: ' + k1 + '<br>';
divResult.innerHTML = divResult.innerHTML + '第二个值是：' + k2 + '<br>';
divResult.innerHTML = divResult.innerHTML + '第三个值是：' + k3 + '<br>';
divResult.innerHTML = divResult.innerHTML + '第四个值是：' + k4 + '<br>';
divResult.innerHTML = divResult.innerHTML + '第五个值是：' + k5 + '<br>';
divResult.innerHTML = divResult.innerHTML + '第六个值是：' + k6 + '<br>';



divResult.innerHTML =
      divResult.innerHTML + '第一个信息没有输入有效内容<br>';

      divResult.innerHTML =
      divResult.innerHTML + '大于的判断结果: ' + (k1 > k2) + '<br>';
      divResult.innerHTML =
      divResult.innerHTML + '小于的判断结果: ' + (k2 < k3) + '<br>';
      divResult.innerHTML =
      divResult.innerHTML + '等于的判断结果: ' + (k3 == k4) + '<br>';
      divResult.innerHTML =
      divResult.innerHTML + '不相等的判断结果: ' + (k4 != k5) + '<br>';
      divResult.innerHTML =
      divResult.innerHTML + '大于或者等于的判断结果: ' + (k5 >= k6) + '<br>';
      divResult.innerHTML =
      divResult.innerHTML + '小于或者等于的判断结果: ' + (k6 <= k1) + '<br>';










