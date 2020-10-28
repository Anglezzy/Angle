console.log('进入js0007.js');
var txtContent = document.getElementById('txtContent');
var btnAdd = document.getElementById('btnAdd');
var divResult = document.getElementById('divResult');

btnAdd.addEventListener('click', function () {
  var param = { tbImages: { content: txtContent.value } };
  huhuiyu.ajax('post', '/util/addImage', param, function (data) {
    //divResult.innerHTML = JSON.stringify(data);
    divResult.innerHTML = data.message;
  });
});

// 查询的部分 ==================================
var btnQuery = document.getElementById('btnQuery');
var divImages = document.getElementById('divImages');
var btnMore = document.getElementById('btnMore');
var PAGE_STEP = 5; //每次加载更多数量
// 查询需要分页相关的信息
var pageInfo = { pageNumber: 1, pageSize: 10 };

btnQuery.addEventListener('click', function () {
  console.log({ page: pageInfo });
  huhuiyu.ajax('post', '/util/queryAllImage', { page: pageInfo }, function (
    data
  ) {
    // data.resultData字段是服务器返回的数据
    // /util/queryAllImage返回的resultData中 list是图片数据的数组
    // page是完整的分页信息
    var list = data.resultData.list;
    page = data.resultData.page;
    divResult.innerHTML = JSON.stringify(list) + '<hr>';
    divResult.innerHTML += JSON.stringify(page);
    // 清除原有的内容
    divImages.innerHTML = '';
    //list是一组图片,需要循环添加页面
    // for (变量初始化;循环是否继续的逻辑判断表达式;每次循环胡执行的代码)
    for (var i = 0; i < list.length; i++) {
      // 数组通过下标访问
      var imginfo = list[i];
      console.log(imginfo.content);
      // 创建img元素
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      // 动态创建的元素也可以添加事件
      img.addEventListener('click', function () {
        //this表示当前对象
        window.open(this.getAttribute('src'));
      });
      // 追加到容器中
      divImages.append(img);
    }
  });
});

btnMore.addEventListener('click', function () {
  // 加载更多用了最没有性能的解决方案,就是每次都加大pageSize的值
  page.pageSize = page.pageSize + PAGE_STEP;
  // 触发查询按钮的点击事件
  btnQuery.click();
});
