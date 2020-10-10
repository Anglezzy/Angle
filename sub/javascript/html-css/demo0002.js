console.log('进入demo0002.js');
var div01 = document.getElementById('div01');
var div02 = document.getElementById('div02');
var div03 = document.getElementById('div03');
var line = document.getElementById('line');
console.log(div01, div02 ,div03 , line);

// mouseover 表示鼠标悬停在元素之上触发动作
div01.addEventListener('mouseover', function() {
  line.style.transform = 'translateX(0%)';
});

div02.addEventListener('mouseover', function() {
  line.style.transform = 'translateX(100%)';
});

div03.addEventListener('mouseover', function() {
  line.style.transform = 'translateX(200%)';
});

