console.log('进入detail.js');
// 获取查询字符串的内容postId）
// location对象的一些属性
console.log('页面完整地址：', location.href);
console.log('查询字符串：', location.search);
console.log('网站协议：', location.protocol);
console.log('页面：', location.pathname);
var info = location.search;
// 去掉前8个字符就是postId的值
var postId = info.substr(8);
console.log(postId);
// 如果没有postId就返回帖子首页
function checkPostId () {
  if (!postId) {
    location.href = 'post.html';
    return;
  }
}
checkPostId();

// 后台接口需要的查询参数
var page = { pageNumber: 1, pageSize: 5 };
var tbPost = { postId: postId };

// 查询
function query() {
  huhuiyu.ajax(
    'post',
    '/post/queryDetail',
    { page: page, tbPost: tbPost },
    function (data) {
      console.log(data);
      var list = data.resultData.replies;
      page = data.resultData.page;
      tbPost = data.resultData.tbPost;
      console.log('回帖的集合：', list);
      console.log('分页信息：', page);
      console.log('帖子详情：', tbPost);
      // 处理帖子详细信息显示
      var divTitle = document.getElementById('divTitle');
      var divPost = document.getElementById('divPost');
      var spPostTime = document.getElementById('spPostTime');
      divTitle.innerHTML = tbPost.title;
      divPost.innerHTML = tbPost.content;
      spPostTime.innerHTML = tbPost.createDate;
      // 处理回帖信息显示
      var divReply = document.getElementById('divReply');
      divReply.innerHTML = '';
      for (var i = 0; i < list.length; i++) {
        var reply = list[i];
        console.log(reply);
        var div = document.createElement('div');
        // 回帖人
        var span = document.createElement('span');
        span.classList.add('label', 'label-danger');
        span.append(reply.user.nickname + '：');
        div.append(span);
        // 回帖内容
        span = document.createElement('span');
        span.classList.add('text-primary');
        span.append(reply.content);
        div.append(span);
        // 回帖时间
        span = document.createElement('span');
        span.classList.add('label', 'label-info');
        span.append(reply.createDate);
        div.append(span);
        divReply.append(div);
      }
    }
  );
}

// 回帖相关功能
var txtContent = document.getElementById('txtContent');
var btnAdd = document.getElementById('btnAdd');
var tbReply = { content: '', postId: postId };

btnAdd.addEventListener('click', function () {
  tbReply.content = txtContent.value;
  console.log(tbReply);
  huhuiyu.ajax('post', '/reply/add', { tbReply: tbReply }, function (data) {
    txtContent.value = '';
    // alert(data.message);
    document.getElementById('divMessage').innerHTML = data.message;
    // 将id是alert-dialog的bootstrap对话框显示出来
    $('#alert-dialog').modal('show');
    query();
  });
});

query();