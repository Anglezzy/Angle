console.log('音乐播放器');
var myaudio = document.getElementById('myaudio');
var divList = document.getElementById('divList');
// 歌曲信息
var musicList = [];
// 当前音乐索引
var index = 0;

// 查询音乐
function query() {
  huhuiyu.ajax(
    '/media/queryAudio',
    { page: { pageSize: 3, pageNumber: 1 } },
    function (data) {
      console.log(data);
      if (data.success) {
        alert(data.message);
        return;
      }
      // 测试音乐播放是否正确
      // myaudio.setAttribute('src',data.resultData.list[1].url)
      // myaudio.play()
      musicList = data.resultData.list;
      console.log('后台获取的音乐列表 (数组)', musicList);
      showList();
    }
  );
}
// 显示歌曲名称列表
function showList() {
  for (var i = 0; i < musicList.length; i++) {
    var music = musicList[i];
    console.log('音乐信息', music);
    var span = document.createElement('span');
    // bootstrap的版本
    // span.classList.add('btn',i % 2 == 0 ? 'btn-danger' : 'btn-primary')
    // 自定义样式版本
    span.classList.add('btn', 'btn-danger');
    span.append(music.name);
    divList.append(span);
  }
}

huhuiyu.autoLogin(query);
