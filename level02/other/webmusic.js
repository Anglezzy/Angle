console.log('网络音乐播放器');
var list = document.getElementById('list');
var musics = [];

huhuiyu.ajax('/test/music', {}, function (data) {
  console.log(data);
  musics = data.resultData.musics;
  console.log(musics);
  for (var i = 0; i < musics.length; i++) {
    var music = musics[i];
    var span = document.createElement('span');
    span.innerHTML = music.name;
    // 点击播放事件
    span.setAttribute('data-index', i);
    span.addEventListener('click', function () {
      index = this.getAttribute('data-index');
      playMusic();
    });
    list.append(span);
  }
});
var index = 0; //当前音乐
var myaudio = document.getElementById('myaudio');
var divInfo = document.getElementById('divInfo');
var divLylic = document.getElementById('divLylic');
var divControl = document.getElementById('divControl');

function playMusic() {
  var music = musics[index];
  console.log(music);
  divInfo.innerHTML = music.info;
  // divLylic.innerHTML = music.lylic;
  lylicinfo();
  myaudio.setAttribute('src', music.url);
  myaudio.volume = 0.1;
  myaudio.play();
}
// 处理歌词
function lylicinfo() {
  var music = musics[index];
  var lylic = music.lylic;
  //将字符串用特定的字符分隔开，windows里面\r\n是换行
  var lylics = lylic.split('\r\n');
  // 歌词分割成了行为单位数组
  console.log(lylics);
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
    console.log(time, minute * 60 + second);
    div.setAttribute('data-time', minute * 60 + second);
    div.innerHTML = content;
    divLylic.append(div);
  }
}

// 监听播放时间
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
  var divs = document.querySelectorAll('#divLylic>div');
  console.log(divs);
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    console.log(
      'div携带的时间和当前播放时间',
      div.getAttribute('data-time'),
      progress
    );
    // 如果div的携带的起始时间和当前进度事件相等，就是应该显示歌词位置
    if (div.getAttribute('data-time') == progress) {
      divIndex = i;
    }
  }
  console.log('当前歌词div索引', divIndex);
  // 已经播放的都是特效版本
  // for (var i = 0; i <= divIndex; i++) {
  // divs[i].classList.add('active');
  // }
  // 只有当前播放时特效版本
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('active');
  }
  divs[divIndex].classList.add('active');
  // 歌词显示不全,需要自动滚动处理
  // scrollTop可以读取和设置元素垂直滚动的位置
  // scrollLeft 可以读取和设置水平元素水平滚动的位置
  // offsetTop,offsetLeft是获取元素相对容器所在的位置
  divLylic.scrollTop = divs[divIndex].offsetTop - divLylic.offsetTop - 80;
}
