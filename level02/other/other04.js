console.log('自定义进度条');
// 基本的进度条==============================================================
var max = 168;
var progress = 0;
var spProgress = document.getElementById('spProgress');

// 初始化进度条
function initProgress() {
  for (var i = 0; i <= max; i++) {
    var span = document.createElement('span');
    span.classList.add('active');
    spProgress.append(span);
  }
}

// 控制进度
function changeProgress() {
  var spans = document.querySelectorAll('#spProgress > span');
  for (var i = 0; i < spans.length; i++) {
    if (i < progress) {
      // 小于或者等于进度值的元素要active
      spans[i].classList.add('active');
    } else {
      spans[i].classList.remove('active');
    }
  }
}
initProgress();
changeProgress();
setInterval(function () {
  progress++;
  changeProgress();
}, 500);
// 基本的进度条演示结束===================================================================
// 错误里面有 null 多数都是id写错，获取元素的错误
// 错误里面有 not defined 多数都是变量名称写错
// 错误里面是 undefined 是JSON或者页面元素没有对应的属性. 例如:a={name:dd}

// 可以拖动的进度条演示开始=================================================================
var volume = 50; // 当前音量最大值
var maxVolume = 100; // 最大值
var div01 = document.getElementById('div01'); // 音量进度条容器
var div02 = document.getElementById('div02'); // 音量进度值显示
div02.innerHTML = volume;
// 初始化进度条
function initVolume() {
  for (var i = 0; i <= maxVolume; i++) {
    var span = document.createElement('span');
    // 记录元素音量值
    span.setAttribute('data-volume', i);
    // 通过点击控制音量
    span.addEventListener('click', function () {
      volume = this.getAttribute('data-volume');
      div02.innerHTML = volume;
      changeVolume();
    });
    // 拖过鼠标悬停模拟拖动
    span.addEventListener('mouseover', function () {
      if (moveVolume) {
        volume = this.getAttribute('data-volume');
        div02.innerHTML = volume;
        changeVolume();
      }
    });
    div01.append(span);
  }
}

// 改变进度
function changeVolume() {
  var spans = document.querySelectorAll('#div01 > span');
  for (var i = 1; i < spans.length; i++) {
    if (i <= volume) {
      spans[i].classList.add('active');
    } else {
      spans[i].classList.remove('active');
    }
  }
}

// 按键控制
document.addEventListener('keydown', function (event) {
  console.log(event);
  // keyCode 上38 下40 左37 右39
  if (event.keyCode == 38 || event.keyCode == 39) {
    volume++;
    volume = volume > maxVolume ? maxVolume : volume;
    div02.innerHTML = volume;
    changeVolume();
  }
  if (event.keyCode == 37 || event.keyCode == 40) {
    volume--;
    volume = volume < 0 ? 0 : volume;
    div02.innerHTML = volume;
    changeVolume();
  }
});

// 拖动控制
// 1: 要进入div01之后点击按键没有释放的时候
// 2: 按键释放或者离开了div01就不在触发移动事件
// 3: 音量里面的span触发鼠标进入事件切换音量模拟拖动效果
var moveVolume = false; // 是否是拖动控制音量状态
div01.addEventListener('mousedown', function () {
  console.log('开启拖动音量');
  moveVolume = true;
});
document.addEventListener('mouseup', function () {
  console.log('关闭拖动音量');
  moveVolume = false;
});

initVolume();
changeVolume();
// 可以拖动的进度条演示结束========================================================================
