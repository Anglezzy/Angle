console.log('播放器');
var music = [
  {
    url:
      'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1',
    name: '21 guns',
    info: 'balabala',
    lylic: '............'
  },
  {
    url:
      'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=9&tbOssInfo.obid=1',
    name: 'never say never',
    info: 'aaaabbb',
    lylic: '哈哈哈'
  },
  {
    url:
      'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=13&tbOssInfo.obid=1',
    name: 'heal the world',
    info: '治愈世界',
    lylic: '嘻嘻嘻'
  }
];

var divList = document.getElementById('divList');
// 初始化播放列表
for (var i = 0; i < music.length; i++) {
  var m = music[i];
  var span = document.createElement('span');
  span.append(m.name);
  span.setAttribute('data-index', i); //自定义数据属性，记住音乐的索引
  //绑定鼠标双击事件
  span.addEventListener('dblclick', function () {
    console.log(this.getAttribute('data-index'));
    index = this.getAttribute('data-index');
    playMusic();
  });
  divList.append(span);
}

var index = 0; // 当前播放音乐的索引
var myaudio = document.getElementById('myaudio');
var divInfo = document.getElementById('divInfo');
var divGc = document.getElementById('divGc');
var myprogress = document.getElementById('myprogress');

function playMusic() {
  // 播放
  myaudio.setAttribute('src', music[index].url);
  myaudio.play();
  // 信息
  divInfo.innerHTML = music[index].info;
  divGc.innerHTML = music[index].lylic;
}

var progress = 0; //播放进度（秒）
var timer = null; //进度控制的计时器
var duration = 0; //时长秒数
var playing = false; // 是否有播放音乐

// 播放进度显示(获取音乐时长) loadedmetadata,音视频特有的事件,加载元数据信息完成
myaudio.addEventListener('loadedmetadata', function () {
  playing = false;
  console.log(myaudio.duration); //时长秒数
  duration = parseInt(myaudio.duration); //丢掉小数位
  myprogress.setAttribute('max', duration); //时间长度就是进度条的最大值
  myprogress.setAttribute('value', 0); //恢复进度条
  // 不要有多个计时器
  if (timer) {
    clearInterval(timer);
    progress = 0;
  }
  playing = true;
  // 为了测试自动播放和切换歌曲，只播放最后30秒
  myaudio.currentTime = duration - 30;
  progress = duration - 30;

  timer = setInterval(function () {
    //如果歌曲暂停，计时器就不要工作
    if (myaudio.paused) {
      return;
    }
    progress++;
    myprogress.setAttribute('value', progress);
    //如果进度条满了就清除掉计数器
    if (progress >= duration) {
      playing = false;
      clearInterval(timer);
    }
    if (progress >= duration && autoplay) {
      // 自动切换下一首，且循环
      index = (index + 1) % music.length;
      playMusic();
    }
  }, 1000);
});

// 播放控制的暂停和继续
var spPlay = document.getElementById('spPlay');
spPlay.addEventListener('click', function () {
  if (!playing) {
    return;
  }
  //判断是否暂停
  console.log(myaudio.paused);
  if (myaudio.paused) {
    myaudio.play();
    spPlay.innerHTML = '暂停';
  } else {
    myaudio.pause();
    spPlay.innerHTML = '播放';
  }
});

// 自动循环播放
var spAll = document.getElementById('spAll');
var autoplay = false;

spAll.addEventListener('click', function () {
  index = 0; //从第一首开始
  autoplay = true; //开启自动播放
  playMusic();
});

//音量控制
myaudio.volume = 0.1;
var volume = 0.1;
var myvolume = document.getElementById('myvolume');
myvolume.setAttribute('value', parseInt(myaudio.volume * 100));
window.addEventListener('mousewheel', function (ev) {
  console.log(ev);
  if (ev.deltaY < 0) {
    volume = volume - 0.02;
    myaudio.volume = volume < 0 ? 0 : volume;
  } else if (ev.deltaY > 0) {
    volume = volume + 0.02;
    myaudio.volume = volume > 1 ? 1 : volume;
  }
  volume = myaudio.volume;
  myvolume.setAttribute('value', parseInt(myaudio.volume * 100));
});

//作业：漂亮的播放器