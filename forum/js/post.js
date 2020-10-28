console.log('论坛首页js');
var page = { pageNumber: 1, pageSize: 10 };
var secPost = document.getElementById('secPost');

// 转换时间戳（数字）为我们指定的日期格式
function formatDate(time) {
  //创建日期时间对象
  var date = new Date();
  //setTime(时间戳)是修改日期对象的时间到时间戳
  date.setTime(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return (
    year + '年' + month + '月' + day + '日' + hour + ':' + minute + ':' + second
  );
}

function query() {
  huhuiyu.ajax('post', '/post/queryAll', { page: page }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    secPost.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var postinfo = list[i];
      console.log(postinfo);
      // 容器
      var div = document.createElement('div');
      // 第一行，发帖标题和发帖人
      var line01 = document.createElement('div');
      line01.append(postinfo.title + '-' + postinfo.user.nickname);
      line01.classList.add('bg-primary');
      div.append(line01);
      var line02 = document.createElement('div');
      line02.append(formatDate(postinfo.createDate));
      line02.classList.add('text-danger', 'text-right');
      div.append(line02);
      // 通过虚拟的属性记住postId，date-是html5的一个规范
      // 用于用户记住一些数据，-后面至少有一个字符，名称全小写
      div.setAttribute('date-post-id', postinfo.postId);
      // 点击的动作，跳转到详情页
      div.addEventListener('click', function () {
        var postId = this.getAttribute('date-post-id');
        console.log(postId);
        // 页面通过查询字符串传递数据其它页面
        // 查询字符串的格式是？名称=值&名称2=值2
        location.href = 'detail.html?postId=' + postId;
      });
      secPost.append(div);
     
    }
  });
}

query();
// 全部作业
// 论坛首页 带分页效果
// 图片墙美化
// 留言板带美化
// 用户登陆和注册，带美化
