console.log('进入ajax0010.js');

var page = { pageSize: 10, pageNumber: 1 };

function query() {
  huhuiyu.ajax('post', '/util/queryAllImage', { page: page }, function (data) {
    console.log(data);
    var list = data.resultData.list;
    images.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
      var imginfo = list[i];
      // 产生表格的行
      var tr = document.createElement('tr');
      // 序号的表格
      var td = document.createElement('td');
      td.append(i + 1 + '');
      tr.append(td);
      // 编号的表格
      td = document.createElement('td');
      td.append(imginfo.iid);
      tr.append(td);
      // 内容的表格
      td = document.createElement('td');
      // td.append(imginfo.content);
      // 超链接版<a href="...." target = "_blank">...</a>
      var ahref = document.createElement('a');
      ahref.setAttribute('href', imginfo.content);
      ahref.setAttribute('target','_blank')
      ahref.append(imginfo.content);

      td.append(ahref);
      tr.append(td);
      // 图片预览的表格
      td = document.createElement('td');
      var img = document.createElement('img');
      img.setAttribute('src', imginfo.content);
      td.append(img);
      tr.append(td);
      // 追加到tbody
      images.append(tr);
    }
  });
}

query();
