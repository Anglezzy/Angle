console.log('数据联动');
var selProvince = document.getElementById('selProvince');
var selCity = document.getElementById('selCity');
var tabCity = document.getElementById('tabCity');

// 省份信息的查询
function queryProvince() {
  huhuiyu.ajax('/link/queryAllProvince', {}, function (data) {
    // console.log(data);
    // 省份信息
    var list = data.resultData.list;
    plist = list; //记录省份的信息，方便后面的显示
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      // console.log(p);
      // 产生option添加的省份的select中
      var op = document.createElement('option');
      op.append(p.province);
      // option的值是省份的编号，方便后面查询城市信息
      op.setAttribute('value', p.pid);
      selProvince.append(op);
    }
    // 默认选择第一项
    selProvince.selectedIndex = 0;
    // 调用城市查询的方法来更新对应的城市信息
    queryCity();
  });
}

//联动其实就是检测省份选择值的变化
selProvince.addEventListener('change', function () {
  queryCity();
});

function queryCity() {
  //获取到选中的省份信息
  var tbCity = { pid: selProvince.value };
  console.log(tbCity);
  //通过省份值查询城市
  huhuiyu.ajax(
    '/link/queryCityByProvince',
    {
      tbCity: tbCity,
    },
    function (data) {
      // 先清空原来的值
      selCity.innerHTML = '';
      var list = data.resultData.list;
      clist = list; //记住城市的信息,方便后面的显示
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        // console.log(c);
        var op = document.createElement('option');
        op.append(c.city);
        op.setAttribute('value', c.cid);
        selCity.append(op);
      }
      // 选中中间项,options是select特有的属性,表示所以选项的集合
      selCity.selectedIndex = parseInt(selCity.options.length / 2);
      // 第二种联动显示方式
      tabCity.innerHTML = '';
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        var tr = document.createElement('tr');
        // 编号
        var td = document.createElement('td');
        tr.append(td);
        td.append(c.cid);
        // 省份
        td = document.createElement('td');
        tr.append(td);
        // 获取省份信息
        var p = queryProvinceName(c.pid);
        td.append(p.province);
        // 城市
        td = document.createElement('td');
        tr.append(td);
        td.append(c.city);
        tabCity.append(tr);
      }
      showInfo();
    }
  );
}
// 记录省份和城市的信息,方便查找显示
var plist = []; //省份的信息
var clist = []; //城市的信息
// 显示选中的信息
var spInfo = document.getElementById('spInfo');
function showInfo() {
  // 找到选中的省份和城市
  var pid = selProvince.value;
  var cid = selCity.value;
  // 选中的编号
  console.log('显示信息:', pid, cid);
  // 调用查找省份信息的方法获取选中的省份信息
  var p = queryProvinceName(pid);
  spInfo.innerHTML = p.province + '-';

  // 通过编号查找完整的城市信息
  for (var i = 0; i < clist.length; i++) {
    var c = clist[i];
    if (cid == c.cid) {
      spInfo.innerHTML += c.city;
      break;
    }
  }
}

// 城市变化就显示信息
selCity.addEventListener('change', function () {
  showInfo();
});
// 相同的代码变成function ,不同的部分用参数
// 通过pid找到对应的省份信息
function queryProvinceName(pid) {
  // 通过编号查找完整的省份信息(最笨的方式 ，循环一个一个的比对)
  for (var i = 0; i < plist.length; i++) {
    var p = plist[i]; //取回当个省份信息
    // 如果下拉选中的pid值和循环中的渠道的省份信息pid一致，就是选中省份
    if (pid == p.pid) {
      console.log(p);
      // 找到了就返回个调用者
      return p;
    }
  }
}

queryProvince();

// 作业：部门员工联动
// 1:
// function 名称(参数列表){
// 要执行的代码
// 通过return;可以中断function的执行,一般都在if这种流程判断里面
// }
// 调用方式 就是 名称 (参数值列表);
// 2:
// function 名称(参数列表) {
// 要执行的代码
// 通过return值 ;可以中断function的执行,但是会返回值给调用者
// }
// 调用方式 var 变量名称=名称(参数值列表);
// 那么变量就是return后面的值

// 作业,记事本的练习要全部完成！！！
// 联动的改善
// ajax的所有操作都要补上success为false的显示信息并中断执行的流程判断
