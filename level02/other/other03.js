// https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1
// https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=13&tbOssInfo.obid=1
// https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=9&tbOssInfo.obid=1

var music = [
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=8&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=13&tbOssInfo.obid=1',
  'https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=9&tbOssInfo.obid=1',
];

var myaudio = document.getElementById('myaudio');
var btnPlay = document.getElementById('btnPlay');

btnPlay.addEventListener('click', function () {
  // 通过修改src属性切换音乐
  myaudio.setAttribute('src', music[0]);
  // 开始播放
  myaudio.play();
});

var selMusic = document.getElementById('selMusic');

for (var i = 0; i < music.length; i++) {
  var op = document.createElement('option');
  op.setAttribute('value', i);
  op.append('音乐' + i);
  selMusic.append(op);
}

selMusic.addEventListener('change', function () {
  console.log(selMusic.value);
  if (selMusic.value == -1) {
    // 跳过请选择
    return;
  }
  // 通过修改sec属性切换音乐
  myaudio.setAttribute('src', music[selMusic.value]);
  // 开始播放
  myaudio.play();
});
