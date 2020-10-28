// window.addEventListener('mousewheel', function (event) {
//   console.log(event);
// });
console.log('元素拖放');
var divDnd = document.getElementById('divDnd');
// 元素所在位置
console.log('divDnd的坐标位置', divDnd.offsetLeft, divDnd.offsetTop);
// 记录鼠标点击位置和元素左边的差距，拖动中的时候就一直的维持这个差距
var offsetX = 0;
var offsetY = 0;
// 开始拖动事件
divDnd.addEventListener('dragstart', function (event) {
  console.log('拖放开始', event);
  console.log('鼠标位置:', event.clientX, event.clientY);
  // 点击开始就计算相差的距离
  offsetX = divDnd.offsetLeft - event.clientX;
  offsetY = divDnd.offsetTop - event.clientY;
  console.log('差距'.offsetX, offsetY);
});

// 拖放结束事件
divDnd.addEventListener('dragend', function (event) {
  console.log('拖放结束', event);
});

// 拖放进行中事件，是一个会反复触发的事件
divDnd.addEventListener('drag', function (event) {
  // console.log('拖动中', event);
  if (event.clientY == 0 && event.clientX == 0) {
    return;
  }
  // 元素位置就是鼠标所在位置加差距值
  divDnd.style.left = event.clientX + offsetX + 'px';
  divDnd.style.top = event.clientY + offsetY + 'px';
});

divDnd.addEventListener('click', function () {
  console.log('点击事件');
});

// 手机版本不支持drag,手机是触摸事件touch
divDnd.addEventListener('touchstart', function (ev) {
  console.log('触摸开始', ev);
  // 手机一般都是支持多点触摸,我们这个就只关注第一个触摸点
  var touch = ev.touches[0];
  offsetX = divDnd.offsetLeft - touch.clientX;
  offsetY = divDnd.offsetTop - touch.clientY;
});

divDnd.addEventListener('touchend', function (ev) {
  console.log('触摸结束', ev);
});

divDnd.addEventListener('touchmove', function (ev) {
  // 屏蔽腾讯恶习人的提示信息
  ev.preventDefault();
  var touch = ev.touches[0];
  if (touch.clientY == 0 && touch.clientX == 0) {
    return;
  }
  divDnd.style.left = touch.clientX + offsetX + 'px';
  divDnd.style.top = touch.clientY + offsetY + 'px';
});
