console.log('进入z.js');
var div01 = document.getElementById('div01');
var div02 = document.getElementById('div02');
var div03 = document.getElementById('div03');
var div04 = document.getElementById('div04');
var div05 = document.getElementById('div05');
var div06 = document.getElementById('div06');
for (var i = 155; i <= 255; i = i + 5) {
  var elediv = document.createElement('div');
  var color = 'rgb(' + i + ',' + i + ',' + i + ')';
  elediv.style.backgroundColor = color;
  elediv.append(color);
  div01.append(elediv);
}
for (var i = 5; i <= 145; i = i + 5) {
  var elediv = document.createElement('div');
  var color = 'rgb(' + 0 + ',' + 0 + ',' + i + ')';
  elediv.style.backgroundColor = color;
  elediv.append(color);
  div02.append(elediv);
}
for (var i = 155; i <= 255; i = i + 5) {
  var elediv = document.createElement('div');
  var color = 'rgb(' + 0 + ',' + i + ',' + i + ')';
  elediv.style.backgroundColor = color;
  elediv.append(color);
  div03.append(elediv);
}
for (var i = 155; i <= 255; i = i + 5) {
  var elediv = document.createElement('div');
  var color = 'rgb(' + i + ',' + i + ',' + 0 + ')';
  elediv.style.backgroundColor = color;
  elediv.append(color);
  div04.append(elediv);
}
for (var i = 5; i <= 155; i = i + 5) {
  var elediv = document.createElement('div');
  var color = 'rgb(' + i + ',' + 0 + ',' + i + ')';
  elediv.style.backgroundColor = color;
  elediv.append(color);
  div05.append(elediv);
}
var animates = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedIn',
  'lightSpeedOut',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
  ' heartBeat',
];
var index = Math.floor(Math.random() * animates.length);
var divs = document.querySelectorAll('#div06>div');
setInterval(function () {
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    console.log(div);
    index = Math.floor(Math.random() * animates.length);
    div.setAttribute('class', 'animated infinite ' + animates[index]);
  }
  setTimeout(function () {
    divs.setAttribute('class', '');
  }, 1500);
}, 2000);
