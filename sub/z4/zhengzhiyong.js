var jf01 = document.getElementById('z01');
var jf02 = document.getElementById('jf02');
var daan01 = document.getElementById('daan01');
var cf01 = document.getElementById('cf01');
var cfa2 = document.getElementById('cf02');
var daan02 = document.getElementById('daan02');
var cf01 = document.getElementById('cf01');
var cf02 = document.getElementById('cf02');
var daan03 = document.getElementById('daan03');
anniu.addEventListener('click', function() {
  daan01.innerHTML = jf01.value - jf02.value;
  daan02.innerHTML = cf01.value * cf02.value;
  daan03.innerHTML = cf01.value / cf02.value;
});



var donghua  = document.getElementById('donghua');
var dh = document.getElementById('dh');
donghua.addEventListener('click',function(){
  dh.setAttribute('class','animated bounce');
  setTimeout(function(){
   dh.setAttribute('class','');
    console.log('===>延时执行代码');
  },1000);
});
  
