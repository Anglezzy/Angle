console.log('进入ajax0008.js');
// 网站刷新次数统计的key
var key01 = 'huhuiyu.demo.count';
var sp01 = document.getElementById('sp01');
var btn01 = document.getElementById('btn01');
btn01.addEventListener('click', function () {
  var param = { tbCounter: { counterKey: key01 } };
  huhuiyu.ajax('post', '/util/queryCounter', param, function (data) {
    console.log(data);
    // 更新计数器信息
    query();
  });
});

function query() {
  // tbCounter.counterKey
  var param = { tbCounter: { counterKey: key01 } };
  huhuiyu.ajax('post', '/util/queryCounter', param, function (data) {
    console.log(data);
    //如果又值就显示
    if (data.resultData.tbCounter) {
      sp01.innerHTML = data.resultData.tbCounter.amount;
    } else {
      // 否则就是0
      sp01.innerHTML = 0;
    }
  });
}

query();


var key02 = 'huhuiyu.demo.count02';
var sp02 = document.getElementById('sp02');
var btn02 = document.getElementById('btn02');
btn02.addEventListener('click', function () {
  var param = { tbCounter: { counterKey: key02 } };
  huhuiyu.ajax('post', '/util/queryCounter', param, function (data) {
    console.log(data);
    // 更新计数器信息
    query02();
  });
});

function query02() {
  // tbCounter.counterKey
  var param = { tbCounter: { counterKey: key02 } };
  huhuiyu.ajax('post', '/util/queryCounter', param, function (data) {
    console.log(data);
    //如果又值就显示
    if (data.resultData.tbCounter) {
      sp02.innerHTML = data.resultData.tbCounter.amount;
    } else {
      // 否则就是0
      sp02.innerHTML = 0;
    }
  });
}

query02();
