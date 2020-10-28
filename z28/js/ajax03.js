console.log('数据联动');
var selProvince = document.getElementById('selProvince');
var selCity = document.getElementById('selCity');
function queryProvince() {
  huhuiyu.ajax('/link/queryAllProvince', {}, function (data) {
    var list = data.resultData.list;
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      var op = document.createElement('option');
      op.append(p.province);
      op.setAttribute('value', p.pid);
      selProvince.append(op);
      selProvince.selectedIndex = 0;
      queryCity();
    }
  });
}
var selDepartment = document.getElementById('selDepartment');
var selEmployees = document.getElementById('selEmployees');
function queryDepartment() {
  huhuiyu.ajax('/link/queryAllDept', {}, function (data) {
    var list = data.resultData.list;
    for (var i = 0; i < list.length; i++) {
      var dept = list[i];
      var op = document.createElement('option');
      op.append(dept.deptName);
      op.setAttribute('value', dept.deptId);
      selDepartment.append(op);
      selDepartment.selectedIndex = 0;
      queryEmployees();
    }
  });
}
selProvince.addEventListener('change', function () {
  queryCity();
});

function queryCity() {
  var tbCity = { pid: selProvince.value };
  huhuiyu.ajax(
    '/link/queryCityByProvince',
    {
      tbCity: tbCity,
    },
    function (data) {
      selCity.innerHTML = '';
      var list = data.resultData.list;
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        var op = document.createElement('option');
        op.append(c.city);
        op.setAttribute('value', c.cid);
        selCity.append(op);
      }
    }
  );
}

queryProvince();

selDepartment.addEventListener('change', function () {
  queryEmployees();
});
function queryEmployees() {
  var tbEmployee = { deptId: selDepartment.value };
  huhuiyu.ajax(
    '	/link/queryAllEmployeeByDept',
    { tbEmployee: tbEmployee },
    function (data) {
      selEmployees.innerHTML = '';
      var list = data.resultData.list;
      for (var i = 0; i < list.length; i++) {
        var e = list[i];
        var op = document.createElement('option');
        op.append(e.employeeName);
        op.setAttribute('value', e.deptInfo);
        selEmployees.append(op);
      }
    }
  );
}
queryDepartment();
