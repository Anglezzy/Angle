console.log('音乐播放器');
var myaudio = document.getElementById('myaudio');
var divList = document.getElementById('divList');
var divImg = document.getElementById('divImg');
var body = document.getElementById('body');
var txt01 = document.getElementById('txt01');
// 歌曲信息
var musicList = [];
// 当前音乐的索引
var index = 0;
var musictime = ['04:12', '04:18', '03:19'];
myaudio.volume = 0.1;

// 查询音乐
function query() {
  huhuiyu.ajax(
    '/media/queryAudio',
    { page: { pageSize: 3, pageNumber: 1 } },
    function (data) {
      console.log(data);
      if (!data.success) {
        alert(data.message);
        return;
      }
      // 测试音乐播放是否正确
      // myaudio.setAttribute('src', data.resultData.list[1].url);
      // myaudio.play();
      musicList = data.resultData.list;
      console.log('后台获取的音乐列表（数组）', musicList);
      showList();
    }
  );
}
// 显示歌曲名称列表
function showList() {
  for (var i = 0; i < musicList.length; i++) {
    var music = musicList[i];
    console.log('音乐信息', music);
    var span = document.createElement('div');
    var div01 = document.createElement('div');
    var div02 = document.createElement('div');
    // bootstrap的样式版本
    // span.classList.add('btn', i % 2 == 0 ? 'btn-danger' : 'btn-primary');
    // 自定义样式版本
    span.classList.add('mybutton');
    div01.append(music.name);
    div02.append(musictime[i]);
    span.append(div01, div02);
    span.classList.add('box02');
    divList.append(span);
    // 记录span对应的歌曲索引
    span.setAttribute('data-audio-index', i);
    span.addEventListener('click', playAudio);
  }
  divImg.setAttribute('src', music.info);
}

// 播放音乐
function playAudio() {
  // 获取索引对应的音乐
  index = this.getAttribute('data-audio-index');
  var music = musicList[index];
  console.log('点击的音乐索引', index, music);
  // 显示歌词
  showLylic();
  // 播放音乐
  txt01.innerHTML = music.name;
  myaudio.setAttribute('src', music.url);
  divImg.setAttribute('src', music.info);
  myaudio.play();
}

// 显示歌词
var divLylic = document.getElementById('divLylic');
function showLylic() {
  var music = musicList[index];
  // divLylic.innerHTML = music.lylic;
  // 歌词是行为单位
  var lylics = music.lylic.split('\n');
  divLylic.innerHTML = '';
  for (var i = 0; i < lylics.length; i++) {
    var div = document.createElement('div');
    // 获取歌词中的时间信息和歌词内容 [01:22.23]歌词
    var time = lylics[i].split(']')[0]; //[01:22.23
    var content = lylics[i].split(']')[1]; //歌词
    // 去掉time中的第一个[
    time = time.substr(1); //01:22.23
    // 去掉毫秒值(也就是.和它后面的内容)
    time = time.substring(0, time.indexOf('.')); //01:22
    // 转换成秒数
    var times = time.split(':');
    var minute = parseInt(times[0]);
    var second = parseInt(times[1]);
    div.setAttribute('data-time', minute * 60 + second);
    div.innerHTML = content;
    divLylic.append(div);
  }
}
var timer = null; //计时器
var duration = 0; //总时间长度
var progress = 0; //当前进度

myaudio.addEventListener('loadedmetadata', function () {
  duration = parseInt(myaudio.duration);
  // 清除计时器
  if (timer) {
    progress = 0;
    clearInterval(timer);
  }
  timer = setInterval(function () {
    if (myaudio.paused) {
      return;
    }
    changeProgress();
    progress++;
    //处理当前秒数对应的歌词
    findLylic();
    if (progress >= duration) {
      clearInterval(timer);
    }
  }, 1000);
});
// 找到当前时间的歌词
var divIndex = 0;
function findLylic() {
  var divs = document.querySelectorAll('#divLylic > div');
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    //如果div的携带的起始时间和当前进度时间相等，就是应该显示歌词位置
    if (div.getAttribute('data-time') == progress) {
      divIndex = i;
    }
  }
  // 已经播放的都是特效版本
  // for (var i = 0; i <= divIndex; i++) {
  //   divs[i].classList.add('active');
  // }
  // 只有当前播放的是特效版本
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('active');
  }
  divs[divIndex].classList.add('active');
  // 歌词显示不全，需要自动滚动处理,
  // scrollTop可以读取和设置元素垂直滚动的位置
  // scrollLeft 可以读取和设置元素水平滚动的位置
  // offsetTop,offsetLeft是获取元素相对容器所在的位置
  divLylic.scrollTop = divs[divIndex].offsetTop - divLylic.offsetTop - 105;
}
var max = 250;
var progress = 0;
var spProgress = document.getElementById('spProgress');
// 初始化进度条
function initProgress() {
  for (var i = 0; i <= max; i++) {
    var span = document.createElement('span');
    span.classList.add('active1');
    spProgress.append(span);
  }
}

// 控制进度
function changeProgress() {
  var spans = document.querySelectorAll('#spProgress > span');
  for (var i = 0; i < spans.length; i++) {
    if (i < progress) {
      //小于进度值的元素要active
      spans[i].classList.add('active1');
    } else {
      spans[i].classList.remove('active1');
    }
  }
}
initProgress();
changeProgress();
var volume = 75; //当前音量值
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
    // 通过鼠标悬停模拟拖动
    span.addEventListener('mouseover', function () {
      //只有是移动效果开启才触发
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
  //keyCode 上38 下40 左37 右39
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
var moveVolume = false;
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
var spPlay = document.getElementById('spPlay');
spPlay.addEventListener('click', function () {
  console.log(myaudio.paused);
  if (myaudio.paused) {
    myaudio.play();
    spPlay.innerHTML = '&#xe613;';
  } else {
    myaudio.pause();
    spPlay.innerHTML = '&#xe6b8;';
  }
});

huhuiyu.autoLogin(query);
