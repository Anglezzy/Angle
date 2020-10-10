console.log('进入d4.js');

document.getElementById('sp01').addEventListener('click', function() {
  // js修改元素的属性值
  // 元素.setAttribute('属性的名称',属性的值')
  // 下面的代码表示将id是main的元素的class属性修改成style01
  document.getElementById('main').setAttribute('class', 'style01');
  // <开始标记 属性名称="属性的值" 属性1="值1">标记的内容</结束标记>
  // <input type="password" placeholder="请输入密码"
});
// 元素.addEventListener('click'),function(){};click是要点击要执行的动作
document.getElementById('sp02').addEventListener('click', function() {
  document.getElementById('main').setAttribute('class', 'style02');
});
