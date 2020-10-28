var txt01 = document.getElementById('txt01');
var txt02 = document.getElementById('txt02');
var btn = document.getElementById('btn');
var spcount = document.getElementById('spcount');
btn.addEventListener('click', function () {
  spcount.innerHTML = '';
  var num01 = parseInt(txt01.value);
  var num02 = parseInt(txt02.value);
  console.log(num01, num02);
  for (var i = num01; i <= num02; i++) {
    var cishu = document.createElement('span');
    cishu.append(i);
    console.log(cishu);
    spcount.append(cishu);
  }
});
var txt03 = document.getElementById('txt03');
var btn01 = document.getElementById('btn01');
var divcount = document.getElementById('divcount');
btn01.addEventListener('click', function () {
  divcount.innerHTML = '';
  var txt = txt03.value.replace(/\s/g, '');
  console.log(txt);
  for (i = 0; i < 6; i++) {
    var shuzi = document.createElement(txt);
    shuzi.append(txt + i);
    divcount.append(shuzi);
  }
});
