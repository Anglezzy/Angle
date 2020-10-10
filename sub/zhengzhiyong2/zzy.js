console.log('执行zy.js');

document.getElementById('z01').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class','animated flash');
});

document.getElementById('z02').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class','animated shake');
});

document.getElementById('z03').addEventListener('click',function(){
  document.getElementById('ani-div').setAttribute('class','myani');
});

document.getElementById('z04').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class','animated bounceOut');
});

document.getElementById('z05').addEventListener('click', function() {
  document.getElementById('ani-div').setAttribute('class','animated fadeIn');
});